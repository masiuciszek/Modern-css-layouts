/* eslint-disable import/no-unresolved */
import mongoose, { Schema } from 'mongoose'
import { IReview } from './Documents'

const ReviewSchema = new Schema<IReview>({
  text: {
    type: String,
    required: [true, 'you must leave a comment'],
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  store: {
    type: Schema.Types.ObjectId,
    ref: 'Dish',
    required: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
})

const Review = mongoose.model<IReview>('Review', ReviewSchema)

export default Review
