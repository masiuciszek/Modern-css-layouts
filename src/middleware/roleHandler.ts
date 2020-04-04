/* eslint-disable import/no-unresolved */
import { Response, NextFunction } from 'express';
import asyncHandler from './asyncHandler';
import { IAuthRequest } from './authHandler';
import ErrorResponse from '../utils/ErrorResponse';

const roleHandler = asyncHandler(
  async (req: IAuthRequest, res: Response, next: NextFunction) => {
    if (req.user.role !== 'admin') {
      return next(new ErrorResponse('Not a admin', 404));
    }

    next();
  }
);

export default roleHandler;
