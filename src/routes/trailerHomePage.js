import express from "express";
import { editTrailerHomePageUrlController, getTrailerController, getUrlTrailerControllers } from "../controller/trailerHomePageController";

const router = express.Router()

router.get('/trailerUrl', getUrlTrailerControllers);
router.put('/trailerUrl/:id', editTrailerHomePageUrlController);
router.get('/trailerUrl/:id', getTrailerController);

export default router;