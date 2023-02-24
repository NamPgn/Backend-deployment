import express from "express";
import { editTrailerHomePageUrlController, getUrlTrailerControllers } from "../controller/trailerHomePageController";

const router = express.Router()

router.get('/trailerUrl', getUrlTrailerControllers);
router.put('/trailerUrl/:id', editTrailerHomePageUrlController);

export default router;