import express from "express";
import { addCommentController, getAllCommentsControllers, getCommentsUserId, deleteComment } from "../controller/comment";
import router from "./products";

const routes = express.Router();

routes.get('/comments', getAllCommentsControllers);
routes.get('/comment/userId/:userId/productId/:productId', getCommentsUserId);
routes.post('/comment/:id', addCommentController);
router.delete('/comment/:id', deleteComment)
export default routes