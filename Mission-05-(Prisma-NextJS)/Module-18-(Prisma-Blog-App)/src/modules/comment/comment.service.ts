import { CommentStatus } from "../../../generated/prisma/enums";
import { prisma } from "../../lib/prisma";


const createComment = async (payload: {
    content: string;
    postId: string;
    authorId: string;
    parentId?: string;
}) => {

    // validate that the post exists
    await prisma.post.findUniqueOrThrow({
        where: {
            id: payload.postId
        }
    });

    // if parentId is provided, validate that it exists
    if(payload.parentId) {
        await prisma.comment.findUniqueOrThrow({
            where: {
                id: payload.parentId
            }
        });
    }


    const result = await prisma.comment.create({
        data: payload
    });
    return result;
}

const getCommentById = async (commentId: string) => {

    const result = await prisma.comment.findUnique({
        where: {
            id: commentId
        },
        include: {
            // post: true,    // include entire post data

            post: {      // include only selected post fields
                select: {
                    id: true,
                    title: true,
                    views: true
                }
            }
        }
    });
    return result;
}

const getCommentsByAuthorId = async (authorId: string) => {

    const result = await prisma.comment.findMany({
        where: {
            authorId
        },
        orderBy: {
            createdAt: "desc"
        },
        include: {
            post: {
                select: {
                    id: true,
                    title: true
                }
            }
        }
    });
    return result;
}

const deleteComment = async (commentId: string, userId: string) => {

    // only the author of the comment or an admin can delete the comment

    const commentData = await prisma.comment.findFirst({        // validate that the comment exists and belongs to the user
        where: {
            id: commentId,
            authorId: userId
        },
        select: {
            id: true
        }
    });

    if(!commentData) {
        throw new Error("Comment not found or you don't have permission to delete this comment");
    }

    const result = await prisma.comment.delete({
        where: {
            id: commentId
        }
    });
    return result;
}

const updateComment = async (commentId: string, userId: string, payload: { content?: string, status?: CommentStatus}) => {

    // only the author of the comment or an admin can update their comment

    const commentData = await prisma.comment.findUnique({        // validate that the comment exists and belongs to the user
        where: {
            id: commentId,
            authorId: userId
        },
        select: {
            id: true
        }
    });

    if(!commentData) {
        throw new Error("Comment not found or you don't have permission to delete this comment");
    }

    const result = await prisma.comment.update({
        where: {
            id: commentId
        },
        data: payload
    });
    return result;
}

const moderateComment = async (commentId: string, payload: { status: CommentStatus}) => {

    const commentData = await prisma.comment.findUniqueOrThrow({        // validate that the comment exists
        where: {
            id: commentId,
        },
        select: {
            id: true,
            status: true
        }
    });

    if(commentData.status === payload.status) {
        throw new Error(`Your provided status (${payload.status}) is already up to date`);
    }

    return await prisma.comment.update({
        where: {
            id: commentId
        },
        data: payload
    });
}


export const commentService = {
    createComment,
    getCommentById,
    getCommentsByAuthorId,
    deleteComment,
    updateComment,
    moderateComment
};