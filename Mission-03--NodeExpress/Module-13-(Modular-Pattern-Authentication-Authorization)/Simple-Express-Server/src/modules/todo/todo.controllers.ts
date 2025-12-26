import { Request, Response } from "express";
import { todoService } from "./todo.services";


// create todos
const createTodo = async (req: Request, res: Response) => {
    try {
        const result = await todoService.createTodo(req.body);
        console.log(result);

        res.status(200).json({
            success: true,
            message: "Todo created successfully",
            data: result.rows[0]
        })
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

// get all todos
const getAllTodos = async (req: Request, res: Response) => {
    try {
        const result = await todoService.getAllTodos();
        res.status(200).json({
            success: true,
            message: "todos retrieved successfully",
            data: result.rows
        })

    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

// get single todo by id
const getSingleTodo = async (req: Request, res: Response) => {
    try {
        const result = await todoService.getSingleTodo(req.params.id!);

        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: "todo not found"
            });
        }
        else {
            res.status(200).json({
                success: true,
                message: "todo fetched successfully",
                data: result.rows[0]
            });
        }
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

// update todos by id
const updateTodo = async (req: Request, res: Response) => {
    const { title } = await req.body;
    try {
        const result = await todoService.updateTodo(title, req.params.id!);

        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: "todo not found"
            });
        }
        else {
            res.status(200).json({
                success: true,
                message: "todo updated successfully",
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

// delete todos by id
const deleteTodo = async (req: Request, res: Response) => {
    try {
        const result = await todoService.deleteTodo(req.params.id!);

        if (result.rowCount === 0) {
            res.status(404).json({
                success: false,
                message: "todo not found"
            });
        }
        else {
            res.status(200).json({
                success: true,
                message: "todo deleted successfully",
                data: result.rows
            });
        }
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}


export const todoController = {
    createTodo,
    getAllTodos,
    getSingleTodo,
    updateTodo,
    deleteTodo
}