import express from "express";
import { edit, getAlluser, remove, signup, singin, getAuth, commented } from "../controller/auth";
import { upload, uploadXlxs, uploadStorageUser } from "../services/upload";

const router = express.Router();

router.get('/user', getAlluser);
router.get('/user/:id', getAuth);
router.post('/signup', upload, signup);
router.post('/signin', singin);
router.delete('/removeUser/:id', remove);
router.put('/user/:id', upload, edit);
router.get('/user/:id', getAuth);
// router.put('/user/image/:id', upload, editImage);
router.post('/user/creating', uploadStorageUser.single("xlsx"), uploadXlxs);
router.post('/user/comment', commented);
export default router;