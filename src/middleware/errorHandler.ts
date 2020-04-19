/* eslint-disable import/no-unresolved */
import { Request, Response, NextFunction } from 'express'
import ErrorResponse from '../utils/ErrorResponse'

export const errorHandler = (
  err: ErrorResponse,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let error = { ...err }
  error.message = err.message

  // TODO: REMOVE
  console.log(err)
  if (err.name === 'ValidationError') {
    const message = 'Wrong input value'
    error = new ErrorResponse(message, 400)
  }
  if (err.name === 'JsonWebTokenError') {
    const message = 'Auth Error'
    error = new ErrorResponse(message, 404)
  }
  if (err.name === 'TokenExpiredError') {
    const message = 'session expired'
    error = new ErrorResponse(message, 400)
  }

  res
    .status(error.statusCode || 500)
    .json({ success: false, error: error.message || 'Server Error' })

  next()
}
