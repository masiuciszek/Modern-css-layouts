/* eslint-disable import/no-unresolved */
import { Request, Response, NextFunction } from 'express';
import asyncHandler from '../middleware/asyncHandler';
import User from '../models/User';
import ErrorResponse from '../utils/ErrorResponse';
import { IAuthRequest } from '../middleware/authHandler';

export const register = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.create(req.body);
    const token = await user.generateAuthToken();
    res.status(201).json({ success: true, data: user, token });
  }
);

export const getMe = asyncHandler(
  async (req: IAuthRequest, res: Response, next: NextFunction) => {
    const loggedInUser = req.user;

    res.status(201).json({ success: true, data: loggedInUser });
  }
);

export const adminProfile = asyncHandler(
  async (req: IAuthRequest, res: Response, next: NextFunction) => {
    const adminUser = req.user;

    res.status(201).json({ success: true, data: adminUser });
  }
);
