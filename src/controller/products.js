import { getAll, get, addPost, deleteProduct, editPost } from "../services/products"
import Products from "../module/products";
import admin from 'firebase-admin';
import Category from '../module/category'
import Categorymain from "../module/categorymain";

export const getAllProducts = async (req, res) => {
  try {
    const data = await getAll();
    res.status(200).json(
      data
    );
  } catch (error) {
    return res.status(400).json({
      message: "Lỗi rồi"
    })
  }
}

export const getOne = async (req, res) => {
  try {
    const _id = { _id: req.params.id };
    const data = await Products.findById(_id).populate('comments.user', 'username image').populate('category');
    res.json(data);
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      message: "Không ìm thấy bài viết"
    })
  }
}

const bucketName = process.env.BUCKET_NAME;

export const addProduct = async (req, res) => {
  try {

    const {
      name, category, trailer,
      price, seri, copyright, LinkCopyright,
      descriptions, categorymain,
      image
    } = req.body;

    const video = req.file;
    // Xử lý sự kiện khi stream ghi dữ liệu thành công
    if (video) {
      // Nếu không có file video, trả về lỗi
      if (!video) {
        res.status(400).send({ message: "No video uploaded." });
        return;
      }

      // Tạo metadata cho video
      const metadata = {
        contentType: video.mimetype
      };

      // Tạo tên file mới cho video
      const fileName = `${Date.now()}-${video.originalname ? video.originalname : ''}`;
      // Tạo đường dẫn đến file trên Firebase Storage
      const file = admin.storage().bucket(bucketName).file(fileName);
      // Tạo stream để ghi dữ liệu video vào Firebase Storage
      const stream = file.createWriteStream({
        metadata,
        resumable: false
      });

      stream.on("finish", async () => {
        var url = `https://firebasestorage.googleapis.com/v0/b/${bucketName}/o/${fileName}?alt=media`
        // Tạo URL cho video
        // const urls = 'https://firebasestorage.googleapis.com/v0/b/mystorage-265d8.appspot.com/o/Chinese-Wedding-Girl-_-Live-Wallpaper-_.mp4?alt=media&token=97bec8b6-3279-4826-a62a-8f0401fd7db1'

        // Trả về URL của video cho client

        const dataAdd = {
          name: name,
          category: category,
          categorymain: categorymain,
          price: price,
          descriptions: descriptions,
          link: url,
          image: image,
          uploadDate: new Date(),
          seri: seri,
          copyright: copyright,
          LinkCopyright: LinkCopyright,
        }
        const data = await addPost(dataAdd);

        if (data.category) {
          await Category.findByIdAndUpdate(data.category, {
            $addToSet: { products: data._id }
          });
        }

        if (data.categorymain) {
          await Categorymain.findByIdAndUpdate(data.categorymain, {
            $addToSet: { products: data._id }
          });
        }
        console.log("data", dataAdd)
        return res.json(data);
      });
      // Xử lý sự kiện khi stream ghi dữ liệu bị lỗi
      stream.on("error", err => {
        console.error(err);
        res.status(500).send({ message: "Failed to upload video." });
      });

      // Ghi dữ liệu video vào stream
      stream.end(video.buffer);
    } else {
      const dataAdd = {
        name: name,
        category: category,
        price: price,
        descriptions: descriptions,
        uploadDate: new Date(),
        seri: seri,
        copyright: copyright,
        LinkCopyright: LinkCopyright,
        trailer: trailer
      }
      const data = await addPost(dataAdd);
      console.log("data", dataAdd);
      res.json(data);
    }

  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'Error uploading video',
      error: error.message,
    });
  }
}

export const delete_ = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await deleteProduct(id);
    console.log("delete suscess")
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({
      message: error.message
    })
  }
}

export const editProduct = async (req, res) => {
  try {
    const { name, category, price, _id, link, image, seri, copyright, LinkCopyright, descriptions, trailer } = req.body;
    // const { originalname } = req.file;
    const dataEdit = {
      name: name,
      category: category,
      price: price,
      descriptions: descriptions,
      image: image,
      link: link,
      seri: seri,
      copyright: copyright,
      LinkCopyright: LinkCopyright,
      trailer: trailer
    }
    const data = await editPost(_id, dataEdit);
    console.log("data", _id, data);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({
      message: error.message
    })
  }
}

export const deleteMultipleProduct = async (req, res) => {
  try {
    const id = req.body;
    const data = await Products.remove({
      "_id": {
        $in: id
      }
    })
    console.log("id", data, "id", id);
    return res.status(200).json({
      data: data,
      id: id
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message
    })
  }
}

////12324tw7rt87wery8q7weyr78qwer


export const getAllProductsByCategory = async (req, res) => {
  try {
    const category = req.params.id;
    const data = await Products.find({ category: category });
    res.json(data);
  } catch (error) {
    return res.status(400).json({
      message: error.message
    })
  }
}

export const findCommentByIdProduct = async (req, res) => {
  try {
    const _id = { _id: req.params.id };
    console.log("_id", _id);
    const data = await Products.findById(_id).populate('comments.user', 'username image');
    res.json(data);
  } catch (error) {
    return res.status(400).json({
      message: error.message
    })
  }
}