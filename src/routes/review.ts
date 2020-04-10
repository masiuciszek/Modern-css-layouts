import { Router } from 'express';
import { authHandler } from '../middleware/authHandler';
import { addANewReview, getAllReview } from '../controllers/review.controller';

const router = Router();

router.route('/').get(getAllReview);
router.route('/:dishid').post(authHandler, addANewReview);

export { router };
