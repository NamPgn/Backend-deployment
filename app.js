import express from "express"
import "dotenv/config"
import cors from "cors"
import mongoose from "mongoose";
import routerAuth from "./src/routes/auth";
import routerProducts from "./src/routes/products"
import path from "path";
import routerCategory from "./src/routes/category";
import routerPostList from "./src/routes/post";
import routerTrailer from "./src/routes/trailerHomePage"
import routerComments from "./src/routes/comment";
import admin from 'firebase-admin';
import routerCart from "./src/routes/cart.js";
import routerTypes from "./src/routes/types.js";
import routerCategorymain from "./src/routes/categotymain/categorymain.js";
import serviceAccount from './public/path/mystorage-265d8-firebase-adminsdk-4jj90-9c56ceaf71.json'


var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
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

