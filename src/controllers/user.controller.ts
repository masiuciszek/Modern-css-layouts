/* eslint-disable import/no-unresolved */
import { Request, Response, NextFunction } from 'express'
import User from '../models/User'
import { asyncHandler } from '../middleware/asyncHandler'
import ErrorResponse from '../utils/ErrorResponse'
import { IAuthRequest } from '../utils/types'

/**
 * @path /api/users
 * @method GET
 * @access public
 */

export const getAllUsers = asyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const users = await User.find().select('-password -tokens')
    if (!users) {
      return next(new ErrorResponse('No users', 404))
    }
    res.status(200).json({ success: true, data: users })
  }
)

/**
 * @path /api/users/register
 * @method POST
 * @access public
 */
export const registerUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const user = await User.create(req.body)
    const token = await user.generateAuthToken()

    res
      .status(201)
      .json({ success: true, msg: 'user created', data: user, token })
  }
)

/**
 * @path /api/users/me
 * @method PUT
 * @access public
 * @desc update me
 */
export const updateUser = asyncHandler(
  async (
    req: IAuthRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const loggedInUser = req.user

    const updatedUser = await User.findByIdAndUpdate(
      loggedInUser.id,
      req.body,
      { new: true, runValidators: true }
    )
    await updatedUser?.save()
    res.status(200).json({ success: true, data: updatedUser })
  }
)

/**
 * @path /api/users/me
 * @method GET
 * @access private
 * @desc get me
 */
export const getMe = asyncHandler(
  async (
    req: IAuthRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const loggedInUser = await User.findById(req.user.id).select('-password')

    res.status(200).json({ success: true, data: loggedInUser })
  }
)

/**
 * @path /api/users/me
 * @method DELETE
 * @access private
 * @desc delete me
 */
export const deleteMe = asyncHandler(
  async (
    req: IAuthRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const user = await User.findById(req.user.id)
    if (!user) {
      return next(new ErrorResponse(`Auth error`, 404))
    }
    // const removedUser = await User.findByIdAndDelete(loggedInUser.id)

    await req.user.remove()

    res.status(200).json({
      success: true,
      data: {},
      msg: 'user deleted',
    })
  }
)
