/* eslint-disable import/no-unresolved */
import { Router } from 'express';
import { register } from '../controllers/user.controller';

const router = Router();

router.route('/register').post(register);

export { router };
