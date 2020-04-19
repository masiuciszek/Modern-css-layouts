/* eslint-disable import/no-unresolved */
import mongoose, { Schema } from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { NextFunction } from 'express'
import { IUser } from './Documents'
import Store from './Store'

const UserSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 6,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
)

UserSchema.virtual('dishes', {
  red: 'Dish',
  localfield: '_id',
  foreignField: 'owner',
  justOne: false,
})

UserSchema.pre<IUser>('save', async function (next: NextFunction) {
  const user = this
  const salt = await bcrypt.genSalt(8)
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, salt)
  }

  next()
})

UserSchema.methods.generateAuthToken = async function (): Promise<string> {
  const user = this
  const token = jwt.sign({ id: user._id, role: user.role }, 'secret', {
    expiresIn: 60 * 180,
  })
  user.tokens = user.tokens.concat({ token })
  await user.save()
  return token
}

UserSchema.methods.comparePassword = async function (
  password: string
): Promise<boolean> {
  const user = this

  const isMatched = await bcrypt.compare(password, user.password)

  return isMatched
}

// To remove all users store when is removed from db
UserSchema.pre<IUser>('remove', async function (next: NextFunction) {
  const user = this

  await Store.findOne({ owner: user._id })

  next()
})

const User = mongoose.model<IUser>('User', UserSchema)

export default User
