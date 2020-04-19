/* eslint-disable import/no-unresolved */
import { Request, Response, NextFunction } from 'express'
import User from '../models/User'
import { asyncHandler } from '../middleware/asyncHandler'
import ErrorResponse from '../utils/ErrorResponse'
import { IAuthRequest } from '../utils/types'

/**
 * @path /api/auth/login
 * @method POST
 * @access public
 */

export const login = asyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { email, password } = req.body
    if (!email || !password) {
      return next(new ErrorResponse(`email and password is required`, 400))
    }
    const user = await User.findOne({ email })

    if (!user) {
      return next(new ErrorResponse(`invalid Credentials`, 400))
    }
    const isMatched = await user.comparePassword(password)

    if (!isMatched) {
      return next(new ErrorResponse(`invalid Credentials`, 400))
    }
    const token = await user.generateAuthToken()

    res.status(200).json({ success: true, data: user, token })
  }
)

/**
 * @path /api/auth/logout
 * @method POST
 * @access private
 */

export const logout = asyncHandler(
  async (
    req: IAuthRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    req.user.tokens = req.user.tokens.filter(
      (token) => token.token !== req.token
    )

    await req.user.save()

    res.status(200).json({ success: true, msg: 'User Logged out ' })
  }
)
/**
 * @path /api/auth/logout_all
 * @method POST
 * @access private
 * @desc log all token sessions
 */

export const logoutAllSessions = asyncHandler(
  async (
    req: IAuthRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    req.user.tokens = []
    await req.user.save()

    res.status(200).json({ success: true, msg: 'User logged out all ' })
  }
)
