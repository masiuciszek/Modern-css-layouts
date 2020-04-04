/* eslint-disable import/no-unresolved */
/* eslint-disable prefer-const */
import { Request, Response, NextFunction } from 'express';
import ErrorResponse from '../utils/ErrorResponse';

const errorHandler = (
  err: ErrorResponse,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err);

  // console.log(Object.entries(err));
  let error = { ...err };

  if (err.code === 11000) {
    let message = 'No duplicate keys are allowed';
    error = new ErrorResponse(message, 404);
  }
  if (err.name === 'CastError') {
    let message = 'invalid data';
    error = new ErrorResponse(message, 400);
  }
  if (err.name === 'JsonWebTokenError') {
    let message = 'Authorization error';
    error = new ErrorResponse(message, 400);
  }

  res
    .status(error.statusCode || 500)
    .json({ success: false, error: error.message || 'Server error' });
  next();
};

export default errorHandler;
