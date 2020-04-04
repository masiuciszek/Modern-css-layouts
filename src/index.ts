import express, { Application } from 'express';
import morgan from 'morgan';
import { router as authRouter } from './routes/auth';
import { router as userRouter } from './routes/user';
import { router as dishRouter } from './routes/dish';
import 'colors';
import { connectDb } from './config/db';

const app: Application = express();
const port = process.env.PORT || 5000;
connectDb();
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/dishes', dishRouter);

app.listen(port, () => {
  console.log(`port is running on port ${port}`.bgMagenta.white.bold);
});
