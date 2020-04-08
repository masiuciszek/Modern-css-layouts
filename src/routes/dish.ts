/* eslint-disable import/no-unresolved */
import { Router } from 'express';
import {
  getAllDishes,
  addNewDish,
  editDish,
  getDishById,
  removeDish,
} from '../controllers/dish.controller';
import { authHandler } from '../middleware/authHandler';
import roleHandler from '../middleware/roleHandler';

const router = Router();

router.route('/').get(getAllDishes).post(authHandler, roleHandler, addNewDish); // tou can only add a dish if you are a Auth

router
  .route('/:id')
  .put(authHandler, roleHandler, editDish) // only edit if you are a auth
  .get(authHandler, getDishById)
  .delete(authHandler, roleHandler, removeDish);

export { router };
