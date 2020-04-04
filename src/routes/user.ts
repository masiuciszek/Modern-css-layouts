/* eslint-disable import/no-unresolved */
import { Router } from 'express';
import { register, getMe, adminProfile } from '../controllers/user.controller';
import { authHandler } from '../middleware/authHandler';
import roleHandler from '../middleware/roleHandler';

const router = Router();

router.route('/register').post(register);
router.route('/getme').get(authHandler, getMe);
router.route('/admin').get(authHandler, roleHandler, adminProfile);

export { router };
