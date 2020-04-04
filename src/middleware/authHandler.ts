/* eslint-disable import/no-unresolved */
/* eslint-disable prefer-destructuring */
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import asyncHandler from './asyncHandler';
import { IUser } from '../models/Documents';
import User from '../models/User';
import ErrorResponse from '../utils/ErrorResponse';

export interface IAuthRequest extends Request {
  user: IUser;
  token: string;
}

export const authHandler = asyncHandler(
  async (req: IAuthRequest, res: Response, next: NextFunction) => {
    let token: any;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return next(new ErrorResponse('Authentication error', 400));
    }

    const decoded: any = jwt.verify(token, 'secret');
    // console.log(decoded);

    const user = await User.findById(decoded.id);

    if (!user) {
      return next(new ErrorResponse('Authentication error', 400));
    }
    req.user = user;
    req.token = token;

    next();
  }
);
