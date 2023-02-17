import Products from "../module/products"

export const getAll = async () => {
  return await Products.find().exec();
}

export const get = async (id) => {
  return await Products.findOne({ '_id': id });
}

export const addPost = async (data) => {
  return new Products(data).save();
}

export const deleteProduct = async (id) => {
  return await Products.findOneAndDelete({ '_id': id });
}

export const editPost = async (id, data) => {
  return await Products.findOneAndUpdate({ '_id': id }, data);
}

