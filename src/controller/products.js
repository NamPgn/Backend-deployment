import { getAll, get, addPost, deleteProduct, editPost } from "../services/products"
import Products from "../module/products";
import { count } from "console";
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
    const data = await get(_id);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error)
    return res.send("Không tìm thấy movie " + _id)
  }
}

export const addProduct = async (req, res) => {
  try {
    const { name, category, price, linkVideo, seri, copyright, LinkCopyright, descriptions } = req.body;
    // const payload=req.body;
    const { filename } = req.file;
    const dataAdd = {
      name: name,
      category: category,
      price: price,
      descriptions: descriptions,
      image: `https://test-19k8.onrender.com/product/${filename}`,
      linkVideo: linkVideo,
      seri: seri,
      copyright: copyright,
      LinkCopyright: LinkCopyright,
    }
    const data = await addPost(dataAdd);
    console.log("data", dataAdd);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "Không thêm đc Product"
    })
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
      message: "Lỗi rồi"
    })
  }
}

export const editProduct = async (req, res) => {
  try {
    const { name, category, price, _id, linkVideo, seri, copyright, LinkCopyright, descriptions } = req.body;
    const { filename } = req.file;
    const s = req.body;
    console.log('req.body', s);
    const dataEdit = {
      name: name,
      category: category,
      price: price,
      descriptions: descriptions,
      image: `https://test-19k8.onrender.com/product/${filename}`,
      linkVideo: linkVideo,
      seri: seri,
      copyright: copyright,
      LinkCopyright: LinkCopyright
    }
    const data = await editPost(_id, dataEdit);
    console.log("data", _id, data);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: error
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
      message: "Lỗi rồi"
    })
  }
}

////12324tw7rt87wery8q7weyr78qwer