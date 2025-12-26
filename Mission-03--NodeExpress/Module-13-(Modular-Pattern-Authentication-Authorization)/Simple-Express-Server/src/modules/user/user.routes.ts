import express from "express";
import { userController } from "./user.controllers";
import logger from "../../middleware/logger";
import auth from "../../middleware/auth";

const router = express.Router();


// create users
router.post("/", userController.createUser);

// get all users
router.get("/", logger, auth("Admin"), userController.getAllUsers);

// get users by id
router.get("/:id", userController.getSingleUser);

// update user by id
router.put("/:id", userController.updateUser);

// delete user by id
router.delete("/:id", userController.deleteUser);


export const userRoutes = router;