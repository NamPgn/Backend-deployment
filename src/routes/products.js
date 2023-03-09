import express from 'express';
import { searchCategory } from '../controller/category';
import {
  addProduct, deleteMultipleProduct, delete_,
  editProduct, getAllProducts, getOne,
  getAllProductsByCategory,
} from '../controller/products'
import {
  uploadProduct, uploadStorageProduct,
  uploadVideoFireBase, uploadVideoProducts,
  uploadXlxsProducts,
} from '../services/upload';


const router = express.Router();

router.get('/products', getAllProducts);
router.get('/product/:id', getOne);
router.delete('/product/:id', delete_);
router.post('/product', uploadVideoFireBase.single('file'), addProduct);
router.put('/product/:id', editProduct);
router.post('/product/creating', uploadStorageProduct.single('xlsxProduct'), uploadXlxsProducts);
router.post('/product/deleteMultiple', deleteMultipleProduct);
router.get('/category/products/:id', getAllProductsByCategory);

router.get('/products/search', searchCategory);

export default router;