import express from "express"
import "dotenv/config"
import cors from "cors"
import mongoose from "mongoose";
import routerAuth from "./routes/auth";
import routerProducts from "./routes/products.js"
import routerCategory from "./routes/category.js";
import routerPostList from "./routes/post.js";
import routerTrailer from "./routes/trailer.home"
import routerComments from "./routes/comment.js";
import admin from 'firebase-admin';
import routerCart from "./routes/cart.js";
import routerTypes from "./routes/types.js";
import routerCategorymain from "./routes/categorymain.js";
import serviceAccount from '../public/path/mystorage-265d8-firebase-adminsdk-4jj90-9c56ceaf71.json';
import routerWeek from "./routes/week.category";
const port = process.env.PORT || 3000;
const routers = [
    routerAuth,
    routerProducts,
    routerCategory,
    routerPostList,
    routerTrailer,
    routerComments,
    routerCart,
    routerTypes,
    routerCategorymain,
    routerWeek
]

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

routers.map(router => app.use("/api", router))

app.get('/', (req, res) => {
    res.send("Đmm");
});


try {
    mongoose.connect(`${process.env.URI}`);
    console.log("Kết nôt mongodb thành công")
} catch (error) {
    console.log("lỗi rồi")
}

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: process.env.STORAGE_BUCKET
})

app.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}`);
});