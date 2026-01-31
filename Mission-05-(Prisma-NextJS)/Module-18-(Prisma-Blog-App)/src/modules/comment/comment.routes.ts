import express from 'express';
import { commentController } from './comment.controller';
import auth from '../../middlewares/auth';
import { USER_ROLES } from '../../constants/userRoles';

const router = express.Router();


router.get('/:commentId', auth(USER_ROLES.ADMIN, USER_ROLES.USER), commentController.getCommentById);

// we wrote /author/:authorId so that it doesn't conflict with the /:commentId route
router.get('/author/:authorId', auth(USER_ROLES.ADMIN, USER_ROLES.USER), commentController.getCommentsByAuthorId);


router.post('/', auth(USER_ROLES.ADMIN, USER_ROLES.USER), commentController.createComment);


router.put('/:commentId', auth(USER_ROLES.ADMIN, USER_ROLES.USER), commentController.updateComment);

router.patch('/:commentId/moderate', auth(USER_ROLES.ADMIN), commentController.moderateComment);


router.delete('/:commentId', auth(USER_ROLES.ADMIN, USER_ROLES.USER), commentController.deleteComment);



export const commentRoutes = router;