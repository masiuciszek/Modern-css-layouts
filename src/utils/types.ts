/* eslint-disable prettier/prettier */
import{ Request } from 'express'
import{ IUser } from '../models/Documents'

export interface IAuthRequest extends Request {
  user: IUser;
  token: string;
}