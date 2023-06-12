import { addCategory, getAllCategory, getCategory, updateCategory, deleteCategory } from "../services/category"
import Products from "../module/products";
import Category from "../module/category";

export const getAll = async (req, res) => {
  try {
    await Category.createIndexes();
    const data = await getAllCategory();
    res.json(data);
  } catch (error) {
    return res.status(400).json({
      message: error.message
    })
  }
}

export const getOne = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await getCategory(id);
    res.json(data)
  } catch (error) {
    return res.status(400).json({
      message: error.message
    })
  }
}

export const readProductByCategory = async (req, res) => {
  try {
    const data = await Products.find().populate('category', 'name');
    res.json(data);
  } catch (error) {
    return res.status(400).json({
      message: error.message
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
    return res.status(400).json({
      message: error.message
    })
  }
}

export const updateCate = async (req, res) => {
  try {
    const data = req.body;
    const { id } = req.params
    const dataEdit = await updateCategory(id, data);
    console.log("data", dataEdit);
    res.json(dataEdit);
  } catch (error) {
    return res.status(400).json({
      message: error.message
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
      message: error.message
    })
  }
}
export const getAllCategoryNotReq = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Category.find({ _id: { $ne: id } })
    res.json(data);
  } catch (error) {
    return res.status(400).json({
      message: error.message
    })
  }
}

export const searchCategory = async (req, res) => {
  try {

    var searchValue = req.query.value;
    var regex = new RegExp(searchValue, 'i');
    const data = await Category.find({
      $or: [{ name: regex }]
    })
    res.json(data);
  } catch (error) {
    return res.status(400).json({
      message: error.message
    })
  }
}