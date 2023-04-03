import express from 'express';
import { createCartController, deleteCartController, getAllCartControllers } from '../controller/cart';

const router = express.Router();


router.get('/cart', getAllCartControllers);
router.post('/cart', createCartController);
router.delete('/cart/:id', deleteCartController)
export default router