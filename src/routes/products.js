import express from 'express';
import { addProduct, deleteMultipleProduct, delete_, editProduct, getAllProducts, getOne, getAllProductsByCategory,searchProducts } from '../controller/products'
import { uploadProduct, uploadStorageProduct, uploadVideoProducts, uploadXlxsProducts, } from '../services/upload';

const router = express.Router();

router.get('/products', getAllProducts);
router.get('/product/:id', getOne);
router.delete('/product/:id', delete_);
router.post('/product', uploadVideoProducts, addProduct);
router.put('/product/:id', uploadProduct, editProduct);
router.post('/product/creating', uploadStorageProduct.single('xlsxProduct'), uploadXlxsProducts);
router.post('/product/deleteMultiple', deleteMultipleProduct);
router.get('/category/products/:id', getAllProductsByCategory);
router.get('/products/search', searchProducts);
export default router;