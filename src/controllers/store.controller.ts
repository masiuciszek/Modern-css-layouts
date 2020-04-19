/* eslint-disable import/no-unresolved */
import { Request, Response, NextFunction } from 'express'
import Store from '../models/Store'
import { asyncHandler } from '../middleware/asyncHandler'
import ErrorResponse from '../utils/ErrorResponse'

/**
 * @path /api/users
 * @method GET
 * @access public
 */

export const getAllStores = asyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const stores = await Store.find()

    if (!stores) {
      return next(new ErrorResponse('no stores', 400))
    }
    res.status(200).json({ success: true, data: stores })
  }
)
