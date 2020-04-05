/* eslint-disable import/no-unresolved */
import { Request, Response, NextFunction } from 'express';
import asyncHandler from '../middleware/asyncHandler';
import ErrorResponse from '../utils/ErrorResponse';
import Dish from '../models/Dish';
import { IAuthRequest } from '../middleware/authHandler';

export const getAllDishes = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    let dishes = await Dish.find().populate({
      path: 'owner',
      select: 'username -_id',
    });

    if (!dishes) {
      return next(new ErrorResponse('NO DISHES', 400));
    }

    if (req.query.sortby === 'desc'.toLowerCase()) {
      dishes = dishes.sort();
    }

    res.status(200).json({ success: true, data: dishes });
  }
);

export const addNewDish = asyncHandler(
  async (req: IAuthRequest, res: Response, next: NextFunction) => {
    const newDish = await Dish.create({
      ...req.body,
      owner: req.user._id,
    });
    res.status(200).json({ success: true, data: newDish });
  }
);

export const editDish = asyncHandler(
  async (req: IAuthRequest, res: Response, next: NextFunction) => {
    res.send();
  }
);
export const uploadPhoto = asyncHandler(
  async (req: IAuthRequest, res: Response, next: NextFunction) => {
    res.send();
  }
);

export const removeDish = asyncHandler(
  async (req: IAuthRequest, res: Response, next: NextFunction) => {
    res.send();
  }
);
