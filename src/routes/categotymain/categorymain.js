import express from "express";
import {
  addCategorymain, deleteCategorymain,
  getAllCategorymain,
  getOneCategoryMain, updateCategorymain
} from "../../controller/categorys/categorymain";


const router = express.Router();

router.get('/categorymain', getAllCategorymain);
router.get('/categorymain/:id', getOneCategoryMain);
router.post('/categorymain', addCategorymain);
router.delete('/category/:id', deleteCategorymain);
router.put('/category/:id', updateCategorymain);

export default router