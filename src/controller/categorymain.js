import Categorymain from "../module/categorymain";
import Types from "../module/types";

export const getAllCategorymain = async (req, res) => {
  try {
    const data = await Categorymain.find();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    })
  }
}


export const getOneCategoryMain = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Categorymain.findById(id).populate('products');
    res.json(data)
  } catch (error) {
    res.status(400).json({
      message: "Lỗi rồi"
    })
  }
}

export const addCategorymain = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const cate = await new Categorymain(data).save();
    await Types.findByIdAndUpdate(data.typeId, {
      $push: { categorymain: { cates: cate._id } }
    })
    res.status(200).json(cate);
  } catch (error) {
    return res.status(400).json({
      message: error.message
    })
  }
}

export const deleteCategorymain = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Categorymain.findByIdAndDelete(id);
    //thiếu phải nhảy sang thằng type tìm cái id nếu tông tại thì xóa khỏi thằng type
    res.json(data);
  } catch (error) {
    return res.status(400).json({
      message: error.message
    })
  }
}

export const updateCategorymain = async (req, res) => {
  try {
    const data = req.body;
    const { id } = req.params
    const dataEdit = Categorymain.findByIdAndUpdate(id, data);
    //thiếu phải nhảy sang thằng type tìm cái id nếu tông tại thì update khỏi thằng type
    console.log("data", dataEdit);
    res.json(dataEdit);
  } catch (error) {
    return res.status(400).json({
      message: error.message
    })
  }
}