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
app.use(express.static(path.resolve('./public')));
app.get('/', (req, res) => {
    res.send("Đmm");
})

try {
    mongoose.connect(`${process.env.URI}/React-toolkit-js`);
    console.log("Kết nôt mongodb thành công")
} catch (error) {
    console.log("lỗi rồi")
}

app.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}`);
});

