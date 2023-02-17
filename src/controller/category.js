import { addCategory, getAllCategory, getCategory, updateCategory, deleteCategory } from "../services/category"
import Products from "../module/products";
import Category from "../module/category";

export const getAll = async (req, res) => {
  try {
    const data = await getAllCategory();
    res.json(data);
  } catch (error) {
    res.status(400).json({
      message: "Lỗi rồi"
    })
  }
}

export const getOne = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await getCategory(id);
    res.json(data)
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Lỗi rồi"
    })
  }
}

export const readProductByCategory = async (req, res) => {
  try {
    const data = await Products.find().populate('category', 'name');
    res.json(data);
  } catch (error) {
    res.status(400).json({
      message: "Lỗi rồi"
    })
  }
}

export const addCt = async (req, res) => {
  try {
    const data = req.body;
    console.log("data", data);
    const cate = await addCategory(data);

    res.json(cate)
  } catch (error) {
    res.status(400).json({
      message: "Lỗi rồi"
    })
  }
}

export const updateCate = async (req, res) => {
  try {
    const data = req.body;
    const { id } = req.params
    const dataEdit = updateCategory(id, data);
    console.log("data", dataEdit);
    res.json(dataEdit);
  } catch (error) {
    res.status(400).json({
      message: "Lỗi rồi"
    })
  }
}

export const deleteCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await deleteCategory(id);
    res.json(data);
  } catch (error) {
    return res.status(400).json({
      message: "Lỗi rồi"
    })
    console.log(error);
  }
}
export const getAllCategoryNotReq = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Category.find({ _id: { $ne: id } })
    res.json(data);
  } catch (error) {
    return res.status(400).json({
      message: "Lỗi rồi"
    })
    console.log(error);
  }
}