/* eslint-disable import/no-unresolved */
import mongoose, { Schema } from 'mongoose'
import slugify from 'slugify'
import { NextFunction } from 'express'
import { IStore } from './Documents'

const StoreSchema = new Schema<IStore>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    tags: [String],
    img: {
      type: Buffer,
      trim: true,
    },
    slug: String,
    category: {
      type: String,
      enum: ['caffee', 'de lux', 'bar', 'restaurant'],
      default: 'main',
    },
    address: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
)

StoreSchema.pre<IStore>('save', async function (
  next: NextFunction
): Promise<void> {
  this.slug = slugify(this.title, { lower: true, replacement: '-' })
  next()
})

StoreSchema.virtual('reviews', {
  ref: 'Review', // what model to link?
  localField: '_id', // which field on the store?
  foreignField: 'store', // which field on the review?
})

const Store = mongoose.model<IStore>('Store', StoreSchema)

export default Store
