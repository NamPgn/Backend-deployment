import express from "express";
import {
  CreateType, DeleteType,
  GetAllTypeCategorys,
  GetOneTypeCategory, UpdatedType
} from "../controller/categorys/types.js";

const router = express.Router();

router.get('/types', GetAllTypeCategorys);
router.get('/type/:id', GetOneTypeCategory);
router.post('/type', CreateType);
router.delete('type/:id', DeleteType);
router.put('type/:id', UpdatedType);

export default router