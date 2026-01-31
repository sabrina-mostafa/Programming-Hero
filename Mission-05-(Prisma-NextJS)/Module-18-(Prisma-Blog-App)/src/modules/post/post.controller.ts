import { NextFunction, Request, Response } from "express";
import { postService } from "./post.service";
import { PostStatus } from "../../../generated/prisma/enums";
import paginationSortingHelper from "../../helpers/paginationSortingHelper";
import { USER_ROLES } from "../../constants/userRoles";


// get all posts
const getAllPost = async (req: Request, res: Response) => {
    try {
        const { search } = req.query;       // for searching posts by title or content 
        console.log("search:", search);

        const tags = req.query.tags;         // for searching posts by tags
        // const {tags} = req.query;            // same as above line
        console.log("tags:", tags);

        // for filtering featured posts (true/false)
        const isFeatured = req.query.isFeatured ?
            (req.query.isFeatured === 'true' ? true
                : (req.query.isFeatured === 'false' ? false : undefined))
            : undefined;
        console.log("isFeatured:", isFeatured);

        const status = req.query.status;     // for filtering posts by status (DRAFT/PUBLISHED/ARCHIVED)
        console.log("status:", status);

        const authorId = req.query.authorId; // for filtering posts by authorId
        console.log("authorId:", authorId);

        const { page, limit, skip, sortBy, sortOrder } = paginationSortingHelper(req.query);    // for pagination and sorting
        console.log("Pagination & Sorting:", { page, limit, skip, sortBy, sortOrder });


        const result = await postService.getAllPost(
            search as string,
            tags as string,
            isFeatured as boolean | undefined,
            status as PostStatus,
            authorId as string,
            page,
            limit,
            skip,
            sortBy,
            sortOrder,
        );
        res.status(200).json({
            result
        })

    } catch (err: any) {
        res.status(400).json({
            message: err.message,
            details: err
        })
    }
}

// get post by id
const getPostById = async (req: Request, res: Response) => {
    try {
        const { postId } = req.params;

        if (!postId) {
            throw new Error("Post ID is required");
        }

        const result = await postService.getPostById(postId as string);
        res.status(200).json({
            result
        })

    } catch (err: any) {
        res.status(400).json({
            message: err.message,
            details: err
        })
    }
}

const getMyAllPosts = async (req: Request, res: Response) => {
    try {
        const user = req.user;

        if (!user) {
            throw new Error("You must be logged in to access this resource");
        }

        const result = await postService.getMyAllPosts(user.id);

        res.status(200).json({
            result
        });

    } catch (err: any) {
        res.status(400).json({
            message: err.message,
            details: err
        })
    }
}

const updatePost = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = req.user;

        if (!user) {
            throw new Error("You must be logged in to access this resource");
        }

        const isAdmin = user.role === USER_ROLES.ADMIN;

        const result = await postService.updatePost(user.id, req.params?.postId as string, req.body, isAdmin);

        res.status(200).json({
            result
        });

    } catch (err: any) {
        // res.status(400).json({
        //     message: err.message || "Post update failed",
        //     details: err
        // })
        next(err);
    }
}

const deletePost = async (req: Request, res: Response) => {
    try {
        const user = req.user;

        if (!user) {
            throw new Error("You must be logged in to access this resource");
        }

        const isAdmin = user.role === USER_ROLES.ADMIN;

        const result = await postService.deletePost(user.id, req.params?.postId as string, isAdmin);

        console.log("Deleted Post:", result);

        res.status(200).json({
            result
        });

    } catch (err: any) {
        res.status(400).json({
            message: err.message || "Post deletion failed",
            details: err
        })
    }
}

const getStats = async (req: Request, res: Response) => {
    try {
        const result = await postService.getStats();

        console.log("Stats:", result);

        res.status(200).json({
            result
        });

    } catch (err: any) {
        res.status(400).json({
            message: err.message || "Failed to retrieve stats",
            details: err
        })
    }
}

// create post
const createPost = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log("from controller: ", req.user);

        if (!req.user) {
            return res.status(401).json({
                error: "Unauthorized!"
            });
        }

        const result = await postService.createPost(req.body, req.user?.id);
        res.status(201).json(result);
    }
    catch (err) {
        // res.status(400).json({
        //     error: "Post creation failed ",
        //     details: err
        // });
        next(err);
    }
}



export const postController = {
    createPost,
    getAllPost,
    getPostById,
    getMyAllPosts,
    updatePost,
    deletePost,
    getStats
}