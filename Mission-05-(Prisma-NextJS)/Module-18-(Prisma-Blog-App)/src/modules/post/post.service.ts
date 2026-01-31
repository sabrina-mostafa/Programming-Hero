import { CommentStatus, Post, PostStatus } from "../../../generated/prisma/client";
import { USER_ROLES } from "../../constants/userRoles";
import { prisma } from "../../lib/prisma";


// get all posts
const getAllPost = async (search: string, tags: string, isFeaturedValue: boolean | undefined, status: PostStatus, authorId: string, page: number, limit: number, skip: number, sortBy: string, sortOrder: string) => {

    const tagsArray = tags?.split(",") || [];

    const allConditions = [
        search && {
            OR: [
                {
                    title: {
                        contains: search,
                        mode: "insensitive"
                    }
                },
                {
                    content: {
                        contains: search,
                        mode: "insensitive"
                    }
                },
                {
                    tags: {
                        has: search
                    }
                }
            ]
        },
        tagsArray.length > 0 && {
            tags: {
                hasEvery: tagsArray
            }
        },
        (typeof isFeaturedValue === "boolean") && {
            isFeatured: isFeaturedValue
        },
        status && {
            status: status
        },
        authorId && {
            authorId: authorId
        }
    ]


    const allPost = await prisma.post.findMany({
        where: {
            AND: allConditions.filter(Boolean) as object[]      // filter out undefined values from the allConditions array
        },
        take: limit,
        skip: skip,
        orderBy: [
            {
                // The square brackets [] in object literals mean computed property name.
                // JS evaluates the variable sortBy and uses its value as the key.
                [sortBy]: sortOrder
            }
        ],
        include: {
            _count: {
                select: { comments: true }  // get the count of comments for each post
            }
        }
    });

    const totalPost = await prisma.post.count({
        where: {
            AND: allConditions.filter(Boolean) as object[]      // filter out undefined values from the allConditions array
        }
    });


    return {
        data: allPost,
        pagination: {
            total: totalPost,
            page: page,
            limit: limit,
            totalPages: Math.ceil(totalPost / limit),
        }
    };
}

// get post by id
const getPostById = async (postId: string) => {

    // using transaction to ensure atomicity of operations (rollback if any operation fails)
    const result = await prisma.$transaction(async (tx) => {

        const postExists = await tx.post.findUnique({
            where: {
                id: postId
            },
            select: {
                id: true
            }
        });
        if (!postExists) {
            throw new Error("Post not found");
        }

        await tx.post.update({
            where: {
                id: postId
            },
            data: {
                views: {
                    increment: 1     // increment the views count by 1
                }
            }
        });

        // fetch the updated post data
        const postData = await tx.post.findUnique({
            where: {
                id: postId
            },
            include: {
                comments: {
                    where: {
                        parentId: null,   // fetch only top-level comments
                        status: CommentStatus.APPROVED
                    },
                    orderBy: {
                        createdAt: "desc"
                    },
                    include: {
                        replies: {
                            where: {
                                status: CommentStatus.APPROVED
                            },
                            orderBy: {
                                createdAt: "asc"
                            },
                            include: {
                                replies: true
                            }
                        }
                    }
                },
                _count: {
                    select: { comments: true }  // get the count of comments for the post
                }
            }
        });
        return postData;
    });

    return result;
}

// get my all posts
const getMyAllPosts = async (userId: string) => {

    // check if the user exists and is active
    await prisma.user.findUniqueOrThrow({
        where: {
            id: userId,
            status: "ACTIVE"
        },
        select: {
            id: true
        }
    });

    const result = await prisma.post.findMany({
        where: {
            authorId: userId
        },
        orderBy: {
            createdAt: "desc"
        },
        include: {
            _count: { select: { comments: true } }  // get the count of comments for each post
        }
    });

    // get total posts count by the user
    const total = await prisma.post.count({
        where: {
            authorId: userId
        }
    });

    // same as above but using aggregate function
    const totalUsingAggregations = await prisma.post.aggregate({
        _count: {
            id: true
        },
        where: {
            authorId: userId
        }
    });

    return {
        data: result,
        totalPosts: total,
        totalUsingAggregations: totalUsingAggregations._count
    };
}


/*
Conditions to update a post:
1. ADMIN can update any post and anything.
2. The USER can update their own post, USER can't update isFeatured field.
*/
const updatePost = async (userId: string, postId: string, payload: Partial<Post>, isAdmin: boolean) => {

    const postData = await prisma.post.findUniqueOrThrow({
        where: {
            id: postId,
        },
        select: {
            id: true,
            authorId: true
        }
    });

    if (!isAdmin && (postData.authorId !== userId)) {
        throw new Error("You are not authorized to update this post");
    }

    if (!isAdmin) {
        // Prevent USER from updating isFeatured field
        delete payload.isFeatured;
    }

    const result = await prisma.post.update({
        where: {
            id: postId,
        },
        data: {
            ...payload
        }
    });

    return {
        data: result
    };
}

const deletePost = async (userId: string, postId: string, isAdmin: boolean) => {

    const postData = await prisma.post.findUniqueOrThrow({
        where: {
            id: postId,
        },
        select: {
            id: true,
            authorId: true
        }
    });

    if (!isAdmin && (postData.authorId !== userId)) {
        throw new Error("You are not authorized to delete this post");
    }

    const result = await prisma.post.delete({
        where: {
            id: postId,
        }
    });

    return {
        data: result
    };
}

// get statistics and analytics
const getStats = async () => {
    // postCount, publishedPostCount, draftPostCount, archivedPostCount, featuredPostCount, totalComments, approvedComments, rejectedComments, totalViews

    const result = await prisma.$transaction(async (tx) => {    // using transaction to run multiple queries in a single call
        const totalPost = await tx.post.count();
        const publishedPostCount = await tx.post.count({ where: { status: PostStatus.PUBLISHED } });

        // or we can use Promise.all to run these counts in parallel
        const [draftPostCount, archivedPostCount, featuredPostCount, totalComments, approvedComments, rejectedComments, totalUsers, totalAdminCount, totalUserCount, totalViews] =
            await Promise.all([
                tx.post.count({ where: { status: PostStatus.DRAFT } }),
                tx.post.count({ where: { status: PostStatus.ARCHIVED } }),
                tx.post.count({ where: { isFeatured: true } }),
                tx.comment.count(),
                tx.comment.count({ where: { status: CommentStatus.APPROVED } }),
                tx.comment.count({ where: { status: CommentStatus.REJECTED } }),
                tx.user.count(),
                tx.user.count({ where: { role: USER_ROLES.ADMIN } }),
                tx.user.count({ where: { role: USER_ROLES.USER } }),
                tx.post.aggregate({
                    _sum: {
                        views: true
                    }
                })
            ]);

        return {
            totalPost,
            publishedPostCount,
            draftPostCount,
            archivedPostCount,
            featuredPostCount,
            totalComments,
            approvedComments,
            rejectedComments,
            totalUsers,
            totalAdminCount,
            totalUserCount,
            totalViews,
            totalViewsCount: totalViews._sum.views || 0,   // same as above totalViews
        }
    })

    return result;

}


// create post
const createPost = async (data: Omit<Post, "id" | "createdAt" | "updatedAt" | "authorId">, userId: string) => {
    const result = await prisma.post.create({
        data: {
            ...data,
            authorId: userId,
        }
    });
    return result;
}



export const postService = {
    createPost,
    getAllPost,
    getPostById,
    getMyAllPosts,
    updatePost,
    deletePost,
    getStats,
}