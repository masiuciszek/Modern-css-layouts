/* eslint-disable import/no-unresolved */
import { Router } from 'express'
import {
  registerUser,
  getAllUsers,
  deleteMe,
  getMe,
  updateUser,
} from '../controllers/user.controller'
import { authHandler } from '../middleware/auth'

const router = Router()

router.route('/').get(authHandler, getAllUsers)
router.route('/register').post(registerUser)
router
  .route('/me')
  .get(authHandler, getMe)
  .put(authHandler, updateUser)
  .delete(authHandler, deleteMe)

export { router }
