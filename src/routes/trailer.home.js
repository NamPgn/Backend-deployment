import express from "express";
import { getAuth } from "../controller/auth";
import { create, editTrailerHomePageUrlController, getTrailerController, getUrlTrailerControllers } from "../controller/trailer.home";
import { isAdmin, isAuth, requiredSignin } from "../middlewares/checkAuth";
import { uploadTrailer } from "../services/upload";
const router = express.Router()

router.get('/trailerUrl', getUrlTrailerControllers);
router.post('/trailer/:userId', requiredSignin, isAuth, isAdmin, uploadTrailer.single('url'), create);
router.put('/trailerUrl/:id/:userId', requiredSignin, isAuth, isAdmin, uploadTrailer.single('url'), editTrailerHomePageUrlController);
router.get('/trailerUrl/:id', getTrailerController);
router.param('userId', getAuth);
export default router;