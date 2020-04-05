import { Router } from 'express';
import { getAllDishes, addNewDish } from '../controllers/dish.controller';
import { authHandler } from '../middleware/authHandler';

const router = Router();

router
  .route('/')
  .get(getAllDishes)
  .post(authHandler, addNewDish);

export { router };
