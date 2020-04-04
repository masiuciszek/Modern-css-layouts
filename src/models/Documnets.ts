import { Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  role: string;
  created_at: Date;
}

export interface IDish extends Document {
  title: string;
  price: number;
  ingredients: string[];
  img: Buffer;
  owner: IUser['_id'];
  created_at: Date;
}
