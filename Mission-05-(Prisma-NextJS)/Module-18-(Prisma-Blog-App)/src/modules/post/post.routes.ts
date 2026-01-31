import express from "express";
import { postController } from "./post.controller";
import auth from "../../middlewares/auth";
import { USER_ROLES } from "../../constants/userRoles";

const router = express.Router();


// get all posts
router.get('/', postController.getAllPost);

// get statistics and analytics
router.get('/stats', auth(USER_ROLES.ADMIN), postController.getStats);

// get my all posts
router.get('/my-posts', auth(USER_ROLES.ADMIN, USER_ROLES.USER), postController.getMyAllPosts);   // we should always write the static routes first before dynamic routes so that they don't get treated as dynamic routes

// get post by postId
router.get('/:postId', postController.getPostById);

// create posts
router.post('/', auth(USER_ROLES.ADMIN, USER_ROLES.USER), postController.createPost);

// update posts
router.patch('/:postId', auth(USER_ROLES.ADMIN, USER_ROLES.USER), postController.updatePost);

// delete posts
router.delete('/:postId', auth(USER_ROLES.ADMIN, USER_ROLES.USER), postController.deletePost);



export const postRoutes = router;