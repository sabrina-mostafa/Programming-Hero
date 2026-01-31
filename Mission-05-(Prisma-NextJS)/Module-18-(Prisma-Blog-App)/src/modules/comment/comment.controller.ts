import { auth } from './../../lib/auth';
import { Request, Response } from "express";
import { commentService } from "./comment.service";

const createComment = async (req: Request, res: Response) => {
    try {
        const user = req.user;  // authenticated user info from auth middleware

        req.body.authorId = user?.id;   // set the authorId of the comment to the authenticated user's id

        const result = await commentService.createComment(req.body);

        res.status(201).json({
            message: "Comment created successfully",
            data: result
        });

    } catch (error) {
        res.status(400).json({
            message: "Comment creation failed",
            details: error
        });
    }
}

const getCommentById = async (req: Request, res: Response) => {
    try {
        const { commentId } = req.params;  // get commentId from request parameters

        const result = await commentService.getCommentById(commentId as string);

        res.status(200).json({
            message: "Comment fetched successfully",
            data: result
        });

    } catch (error) {
        res.status(400).json({
            message: "Comment fetching failed",
            details: error
        });
    }
}

const getCommentsByAuthorId = async (req: Request, res: Response) => {
    try {
        const { authorId } = req.params;  // get authorId from request parameters

        const result = await commentService.getCommentsByAuthorId(authorId as string);

        res.status(200).json({
            message: "Comments fetched successfully",
            data: result
        });

    } catch (error) {
        res.status(400).json({
            message: "Comment fetching failed",
            details: error
        });
    }
}

const deleteComment = async (req: Request, res: Response) => {
    try {
        const { commentId } = req.params;  // get commentId from request parameters

        const user = req.user;  // authenticated user info from auth middleware

        const result = await commentService.deleteComment(commentId as string, user?.id as string);

        res.status(200).json({
            message: "Comment deleted successfully",
            data: result
        });

    } catch (error: any) {
        res.status(400).json({
            message: error.message || "Comment deletion failed",
            details: error
        });
    }
}

const updateComment = async (req: Request, res: Response) => {
    try {
        const { commentId } = req.params;  // get commentId from request parameters

        const user = req.user;  // authenticated user info from auth middleware

        const result = await commentService.updateComment(commentId as string, user?.id as string, req.body);

        res.status(200).json({
            message: "Comment updated successfully",
            data: result
        });

    } catch (error: any) {
        res.status(400).json({
            message: error.message || "Comment update failed",
            details: error
        });
    }
}

const moderateComment = async (req: Request, res: Response) => {
    try {
        const { commentId } = req.params;  // get commentId from request parameters

        const result = await commentService.moderateComment(commentId as string, req.body);

        res.status(200).json({
            message: "Comment moderated successfully",
            data: result
        });

    } catch (error: any) {
        res.status(400).json({
            message: error.message || "Comment moderation failed",
            details: error
        });
    }
}


export const commentController = {
    createComment,
    getCommentById,
    getCommentsByAuthorId,
    deleteComment,
    updateComment,
    moderateComment
};