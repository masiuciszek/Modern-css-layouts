import mongoose from 'mongoose';

export const connectDb = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/food-manager', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log('mongo db is connected'.bgGreen.white.bold);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
