import express from "express";
import { getAuth } from "../controller/auth";
import { addCt, deleteCategoryController, getAll, getAllCategoryNotReq, getOne, readProductByCategory, updateCate } from "../controller/category";
import { isAdmin, isAuth, requiredSignin } from "../middlewares/checkAuth";
const router = express.Router();


router.get('/category/products', readProductByCategory);
router.get('/categorys', getAll);
router.get('/category/:id', getOne);
router.post('/category/:userId', requiredSignin, isAuth, isAdmin, addCt);
router.put('/category/:userId', requiredSignin, isAuth, isAdmin, updateCate);
router.delete('/category/:id/:userId', requiredSignin, isAuth, isAdmin, deleteCategoryController)
router.get('/category/getAllCategoryNotRequest/:id', getAllCategoryNotReq);
router.param('userId', getAuth)
export default router