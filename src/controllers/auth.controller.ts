import { Request, Response, NextFunction } from 'express';
import asyncHandler from '../middleware/asyncHandler';
import ErrorResponse from '../utils/ErrorResponse';
import User from '../models/User';

export const login = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(new ErrorResponse('Invalid credentials', 404));
    }

    const user = await User.findOne({ email });
    if (!user) {
      return next(new ErrorResponse('Invalid credentials', 404));
    }
    const isMatched = await user.comparePassword(password);

    if (!isMatched) {
      return next(new ErrorResponse('Invalid credentials', 404));
    }

    const token = await user.generateAuthToken();

    res.status(200).json({ success: true, data: user, token });
  }
);
