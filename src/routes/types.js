import express from "express";
import { CreateType, DeleteType, GetAllTypeCategorys, GetOneTypeCategory, UpdatedType } from "../controller/types";
import { isAdmin, isAuth, requiredSignin } from "../middlewares/checkAuth";

const router = express.Router();

router.get('/types', GetAllTypeCategorys);
router.get('/type/:id', GetOneTypeCategory);
router.post('/type', requiredSignin, isAuth, isAdmin, CreateType);
router.delete('/type/:id', requiredSignin, isAuth, isAdmin, DeleteType);
router.put('/type/:id', requiredSignin, isAuth, isAdmin, UpdatedType);

export default router