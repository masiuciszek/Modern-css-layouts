/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';

export interface IToken {
  token: string;
}
export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  role: string;
  created_at: Date;
  // avatar: Buffer | undefined;
  tokens: IToken[];
  generateAuthToken: () => Promise<string>;
  comparePassword: (password: string) => Promise<boolean>;
}

export interface IStore extends Document {
  title: string;
  slug: string;
  tags: string[];
  category: string;
  img: Buffer | undefined;
  address: string;
  owner: IUser;
  created_at: Date;
}

export interface IReview extends Document {
  store: IStore;
  author: IUser;
  text: string;
  rating: number;
  created_at: Date;
}

export interface IOrder extends Document {
  products: IStore[];
  owner: IUser;
  created_at: Date;
}
