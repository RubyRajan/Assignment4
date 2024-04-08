import express from 'express';
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from './userCRUD.js';

export const userRouter = express.Router();

userRouter.route('/').post(createUser).get(getAllUsers);

userRouter.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);
