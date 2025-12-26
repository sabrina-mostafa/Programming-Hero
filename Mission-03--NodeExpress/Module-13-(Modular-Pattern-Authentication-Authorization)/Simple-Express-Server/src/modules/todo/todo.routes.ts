import express from "express";
import { todoController } from "./todo.controllers";

const router = express.Router();


// create todos
router.post("/", todoController.createTodo);

// get all todos
router.get("/", todoController.getAllTodos);

// get single todo by id
router.get("/:id", todoController.getSingleTodo);

// update todos by id
router.put("/:id", todoController.updateTodo);

// delete todos by id
router.delete("/:id", todoController.deleteTodo);



export const todoRoutes = router; 