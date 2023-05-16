import express from 'express';
import { searchCategory } from '../controller/category';
import {
  addProduct, deleteMultipleProduct, delete_,
  editProduct, getAllProducts, getOne,
  getAllProductsByCategory,
  findCommentByIdProduct,
} from '../controller/products'
import {
  uploadStorageProduct,
  uploadXlxsProducts,
  uploadvideoandimage,
} from '../services/upload';
import { isAdmin, isAuth, requiredSignin } from "../middlewares/checkAuth";
import { getAuth } from '../controller/auth';

const router = express.Router();

router.get('/products', getAllProducts);
router.get('/product/:id', getOne);
router.delete('/product/:id/:userId', requiredSignin, isAuth, isAdmin, delete_);
router.post('/product/:userId', requiredSignin, isAuth, isAdmin, uploadvideoandimage, addProduct);
router.put('/product/:id:/:userId', requiredSignin, isAuth, isAdmin, uploadvideoandimage, editProduct);
router.post('/product/creating:/userId', requiredSignin, isAuth, isAdmin, uploadStorageProduct.single('xlsxProduct'), uploadXlxsProducts);
router.post('/product/deleteMultiple:/userId', requiredSignin, isAuth, isAdmin, deleteMultipleProduct);
router.get('/category/products/:id', getAllProductsByCategory);
router.get('/products/search', searchCategory);
router.get('/product/comments/:id', findCommentByIdProduct);
router.param('userId', getAuth)
export default router;