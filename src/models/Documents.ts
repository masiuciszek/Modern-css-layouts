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

export interface IDish extends Document {
  title: string;
  ingredients: string[];
  slug: string;
  category: string;
  img: Buffer | undefined;
  price: number;
  owner: IUser;
  created_at: Date;
}
