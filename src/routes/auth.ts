/* eslint-disable import/no-unresolved */
import { Router } from 'express';
import {
  login,
  logout,
  logoutAllSessions,
} from '../controllers/auth.controller';
import { authHandler } from '../middleware/authHandler';

const router = Router();

router.route('/login').post(login);
router.route('/logout').post(authHandler, logout);
router.route('/logout_all').post(authHandler, logoutAllSessions);

export { router };
