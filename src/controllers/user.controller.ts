/* eslint-disable import/no-unresolved */
import { Request, Response, NextFunction } from 'express';
import asyncHandler from '../middleware/asyncHandler';

export const register = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send('register');
  }
);
