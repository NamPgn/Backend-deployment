import express from "express";
import { getAuth } from "../controller/auth";
import { editTrailerHomePageUrlController, getTrailerController, getUrlTrailerControllers } from "../controller/trailerHomePageController";
import { isAdmin, isAuth, requiredSignin } from "../middlewares/checkAuth";
const router = express.Router()

router.get('/trailerUrl', getUrlTrailerControllers);
router.put('/trailerUrl/:id/:userId', requiredSignin, isAuth, isAdmin, editTrailerHomePageUrlController);
router.get('/trailerUrl/:id', getTrailerController);
router.param('userId', getAuth)
export default router;