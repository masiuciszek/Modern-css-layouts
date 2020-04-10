/* eslint-disable import/no-unresolved */
import { Response, NextFunction, Request } from 'express';
import asyncHandler from '../middleware/asyncHandler';
import { IAuthRequest } from '../middleware/authHandler';
import Review from '../models/Review';
import ErrorResponse from '../utils/ErrorResponse';

export const getAllReview = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const allReviews = await Review.find().populate({
      path: 'author dish',
      select: 'username title',
    });

    if (!allReviews) {
      return next(new ErrorResponse('nod reviews', 400));
    }

    res.status(200).json({ success: true, data: allReviews });
  }
);

export const addANewReview = asyncHandler(
  async (req: IAuthRequest, res: Response, next: NextFunction) => {
    const newReview = await Review.create({
      ...req.body,
      author: req.user._id,
      dish: req.params.dishid,
    });
    await newReview.save();

    res
      .status(201)
      .json({ success: true, msg: 'review created', data: newReview });
  }
);

export const editReview = asyncHandler(
  async (req: IAuthRequest, res: Response, next: NextFunction) => {
    res
      .status(201)
      .json({ success: true, msg: 'review created', data: newReview });
  }
);
