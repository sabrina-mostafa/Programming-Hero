import { Request, Response } from "express";
import { userService } from "./user.services";


// create users
const createUser = async (req: Request, res: Response) => {
    try {
        const result = await userService.createUser(req.body);

        res.status(201).json({
            success: true,
            message: "Data inserted successfully",
            data: result.rows[0]
        });

    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

// get all users
const getAllUsers = async (req: Request, res: Response) => {
    try {
        const result = await userService.getAllUsers();

        res.status(200).json({
            success: true,
            message: "Users retrieved successfully",
            data: result.rows
        });

    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message,
            detailedError: err
        })
    }
}

// get users by id
const getSingleUser = async (req: Request, res: Response) => {

    try {
        const result = await userService.getSingleUser(req.params.id as string);

        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        else {
            res.status(200).json({
                success: true,
                message: "User fetched successfully",
                data: result.rows[0]
            })
        }
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

// update user by id
const updateUser = async (req: Request, res: Response) => {
    const { name, email } = await req.body;

    try {
        const result = await userService.updateUser(name, email, req.params.id!);

        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        else {
            res.status(200).json({
                success: true,
                message: "User updated successfully",
                data: result.rows[0]
            })
        }
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

// delete user by id
const deleteUser = async (req: Request, res: Response) => {
    try {
        const result = await userService.deleteUser(req.params.id!);
        console.log(result);

        if (result.rowCount === 0) {
            res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        else {
            res.status(200).json({
                success: true,
                message: "User deleted successfully",
                data: result.rows
            })
        }
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

export const userController = {
    createUser,
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser,
}