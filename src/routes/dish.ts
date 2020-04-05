import { Router } from 'express';
import {
  getAllDishes,
  addNewDish,
  editDish,
  getDishById,
  removeDish,
} from '../controllers/dish.controller';
import { authHandler } from '../middleware/authHandler';

const router = Router();

router
  .route('/')
  .get(getAllDishes)
  .post(authHandler, addNewDish);

router
  .route('/:id')
  .put(authHandler, editDish)
  .get(authHandler, getDishById)
  .delete(authHandler, removeDish);

export { router };
