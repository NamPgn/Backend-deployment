import express from "express"
import "dotenv/config"
import cors from "cors"
import mongoose from "mongoose";
import routerAuth from "./routes/auth";
import routerProducts from "./routes/products.js"
import path from "path";
import routerCategory from "./routes/category.js";
import routerPostList from "./routes/post.js";
import routerTrailer from "./routes/trailerHomePage.js"
import routerComments from "./routes/comment.js";
import admin from 'firebase-admin';
import routerCart from "./routes/cart.js";
import routerTypes from "./routes/types.js";
import routerCategorymain from "./routes/categotymain/categorymain.js";
import serviceAccount from '../public/path/mystorage-265d8-firebase-adminsdk-4jj90-9c56ceaf71.json' assert { type: "json" };;


const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT;
app.use("/api", routerAuth);
app.use("/api", routerProducts);
app.use("/api", routerCategory)
app.use('/api', routerPostList)
app.use('/api', routerTrailer)
app.use('/api', routerComments);
app.use('/api', routerCart);
app.use('/api', routerTypes)
app.use('/api', routerCategorymain)
app.use(express.static(path.resolve('./public')));
app.get('/', (req, res) => {
    res.send("Đmm");
})
//ss
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

