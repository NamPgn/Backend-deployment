import multer from "multer";
import User from "../module/auth";
import Product from "../module/products";
import { storage, storageProductImage, storageVideoUpload, storageXlxs, storageXlxsProduct } from "../storage/storage";
var XLSX = require("xlsx");


//upload code logic
//user
export const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => { //kiểm tra cái ảnh đấy pải là mấy cái dạng kia không
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else { //không thì cút
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }
}).single('image');

//product
export const uploadProduct = multer({
  storage: storageProductImage,
  fileFilter: (req, file, cb) => { //kiểm tra cái ảnh đấy pải là mấy cái dạng kia không
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else { //không thì cút
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }
}).single('image');


// upload excel user
export const uploadXlxs = async (req, res, next) => {
  try {
    let path = req.file.path;
    var workBok = XLSX.readFile(path);
    var sheet_name_list = workBok.SheetNames; //lấy ra cái tên
    let jsonData = XLSX.utils.sheet_to_json( //về dạng json
      workBok.Sheets[sheet_name_list[0]] //lấy cái bảng đầu tiên
    );
    if (jsonData.lenght == 0) { //kiểm tra neus không có gì thì cút
      res.json({
        message: "Not data"
      })
    }
    let saveData = await User.create(jsonData);
    res.json({
      suscess: true,
      message: "data" + saveData
    })
  } catch (error) {
    console.log(error);
  }
}

export const uploadStorageUser = multer({ storage: storageXlxs });



//upload excel product
export const uploadXlxsProducts = async (req, res, next) => {
  try {
    let path = req.file.path;
    var workBok = XLSX.readFile(path);
    var sheet_name_list = workBok.SheetNames; //lấy ra cái tên
    let jsonData = XLSX.utils.sheet_to_json( //về dạng json
      workBok.Sheets[sheet_name_list[0]] //lấy cái bảng đầu tiên
    );
    if (jsonData.lenght == 0) { //kiểm tra neus không có gì thì cút
      res.json({
        message: "Not data"
      })
    }
    let saveData = await Product.create(jsonData);
    res.json({
      suscess: true,
      message: "data" + saveData
    })
  } catch (error) {
    console.log(error);
  }
}
export const uploadStorageProduct = multer({ storage: storageXlxsProduct });


//video - upload



export const uploadVideoStorage = multer({
  storage: storageVideoUpload,
}).single('linkVideo');