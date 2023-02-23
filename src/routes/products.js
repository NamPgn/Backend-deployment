import express from 'express';
import { addProduct, deleteMultipleProduct, delete_, editProduct, getAllProducts, getOne, getAllProductsByCategory } from '../controller/products'
import { uploadProduct, uploadStorageProduct, uploadVideoStorage, uploadXlxsProducts, } from '../services/upload';

const router = express.Router();

router.get('/products', getAllProducts);
router.get('/product/:id', getOne);
router.delete('/product/:id', delete_);
router.post('/product', uploadProduct, addProduct);
router.put('/product/:id', uploadProduct, editProduct);
router.post('/product/creating', uploadStorageProduct.single('xlsxProduct'), uploadXlxsProducts);
router.post('/product/deleteMultiple', deleteMultipleProduct);
router.get('/category/products/:id', getAllProductsByCategory)
export default router;