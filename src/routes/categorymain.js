import express from "express";
import {
  addCategorymain, deleteCategorymainByproduct,
  getAllCategorymain,
  getOneCategoryMain, updateCategorymain
} from "../controller/categorymain";
import { isAdmin, isAuth, requiredSignin } from "../middlewares/checkAuth";

const router = express.Router();

router.get('/categorymain', getAllCategorymain);
router.get('/categorymain/:id', getOneCategoryMain);
router.post('/categorymain', requiredSignin, isAuth, isAdmin, addCategorymain);
router.delete('/categorymain/:id', requiredSignin, isAuth, isAdmin, deleteCategorymainByproduct);
router.put('/category/:id', requiredSignin, isAuth, isAdmin, updateCategorymain);

export default router