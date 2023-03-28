import express from 'express';
import { createCartController, getAllCartControllers } from '../controller/cart';

const router = express.Router();


router.get('/cart', getAllCartControllers);
router.post('/cart', createCartController);
export default router