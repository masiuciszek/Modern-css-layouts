/* eslint-disable import/no-unresolved */
import { Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { asyncHandler } from './asyncHandler'
import { IAuthRequest } from '../utils/types'
import User from '../models/User'
import ErrorResponse from '../utils/ErrorResponse'

const authHandler = asyncHandler(
  async (req: IAuthRequest, res: Response, next: NextFunction) => {
    let token: any
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization?.split(' ')[1]
    }

    if (!token) {
      return next(new ErrorResponse('Not Authorized', 404))
    }

    const decoded: any = jwt.verify(token, 'secret')
    const user = await User.findOne({ _id: decoded.id, 'tokens.token': token })

    if (!user) {
      return next(new ErrorResponse('Not Authorized', 404))
    }

    req.user = user
    req.token = token

    next()
  }
)

export { authHandler }
