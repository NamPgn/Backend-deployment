import express from "express";
import { addCommentController, getAllCommentsControllers, getCommentsUserId } from "../controller/comment";
import router from "./products";

const routes = express.Router();

routes.get('/comments', getAllCommentsControllers);
routes.get('/comment/userId/:userId/productId/:productId', getCommentsUserId);
routes.post('/comment/:id', addCommentController);
export default routes