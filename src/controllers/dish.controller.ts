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

export const getDishById = asyncHandler(
  async (req: IAuthRequest, res: Response, next: NextFunction) => {
    let dish = await Dish.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!dish) {
      return next(new ErrorResponse('No dish found', 400));
    }

    dish = await Dish.findById(req.params.id).populate({
      path: 'owner',
      select: 'username',
    });

    res.status(200).json({ success: true, data: dish });
  }
);

export const editDish = asyncHandler(
  async (req: IAuthRequest, res: Response, next: NextFunction) => {
    const dish = await Dish.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!dish) {
      return next(new ErrorResponse('No dish found', 400));
    }

    const updatedDish = await Dish.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).populate({
      path: 'owner',
      select: 'username',
    });

    await updatedDish?.save();

    res
      .status(201)
      .json({ success: true, data: updatedDish, msg: 'dish updated!' });
  }
);

export const uploadPhoto = asyncHandler(
  async (req: IAuthRequest, res: Response, next: NextFunction) => {
    res.send();
  }
);

export const removeDish = asyncHandler(
  async (req: IAuthRequest, res: Response, next: NextFunction) => {
    const dish = await Dish.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });
    if (!dish) {
      return next(new ErrorResponse('No dish found', 400));
    }

    await Dish.findByIdAndDelete(req.params.id);

    res.status(200).json({ success: true, data: {}, msg: 'data deleted' });
  }
);
