import { addPostConten, deletePost, getAllPostList, updatePost } from "../services/post"
import Post from '../module/post'
export const getAllPostLists = async (req, res) => {
  try {
    const data = await getAllPostList();
    res.json(data);
  } catch (error) {
    return res.status(400).json({
      message: "Lỗi rồi"
    })
    console.log(error)
  }
}

export const addPostList = async (req, res) => {
  try {
    const data = req.body;
    const dataContent = await addPostConten(data);
    console.log(dataContent);
    res.json(dataContent);
  } catch (error) {
    return res.status(400).json({
      message: "Lỗi rồi"
    })
    console.log(error)
  }
}

export const deletePostList = async (req, res) => {
  try {
    const { _id } = req.params;
    const data = await deletePost(_id);
    res.json(data);
  } catch (error) {
    return res.status(400).json({
      message: "Lỗi rồi"
    })
    console.log(error)
  }
}

export const updatePostList = async (req, res) => {
  try {
    const { _id } = req.params;
    const data = req.body;
    const dataContent = await updatePost(_id, data);
    res.json(dataContent);
  } catch (error) {
    return res.status(400).json({
      message: "Lỗi rồi"
    })
    console.log(error)
  }
}