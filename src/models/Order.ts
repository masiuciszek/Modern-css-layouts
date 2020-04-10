/* eslint-disable import/no-unresolved */
import mongoose, { Schema } from 'mongoose';
import { IOrder } from './Documents';

const OrderSchema = new Schema<IOrder>({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Dish',
      required: true,
    },
  ],
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model<IOrder>('Order', OrderSchema);

export default Order;
