/* eslint-disable import/no-unresolved */
import mongoose, { Schema } from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { NextFunction } from 'express';
import { IUser } from './Documents';

const UserSchema = new Schema<IUser>({
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
});

UserSchema.pre<IUser>('save', async function(next: NextFunction) {
  const user = this;
  const salt = await bcrypt.genSalt(8);
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, salt);
  }

  next();
});

UserSchema.methods.generateAuthToken = async function(): Promise<string> {
  const user = this;
  const token = jwt.sign({ id: user._id, role: user.role }, 'secret', {
    expiresIn: 60 * 180,
  });

  await user.save();
  return token;
};

UserSchema.methods.comparePassword = async function(
  password: string
): Promise<boolean> {
  const user = this;

  const isMatched = await bcrypt.compare(password, user.password);

  return isMatched;
};

const User = mongoose.model<IUser>('User', UserSchema);

export default User;
