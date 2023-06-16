import express from "express";
import { getAuth } from "../controller/auth";
import { create, editTrailerHomePageUrlController, getTrailerController, getUrlTrailerControllers } from "../controller/trailer.home";
import { isAdmin, isAuth, requiredSignin } from "../middlewares/checkAuth";
import { uploadTrailer } from "../services/upload";
const router = express.Router()

router.get('/trailerUrl', getUrlTrailerControllers);
router.put('/trailerUrl/:id', uploadTrailer.single('url'), editTrailerHomePageUrlController);
router.get('/trailerUrl/:id', getTrailerController);
router.post('/trailer', uploadTrailer.single('url'), create)
router.param('userId', getAuth)
export default router;