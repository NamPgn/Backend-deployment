import mongoose, { Schema } from "mongoose";
const { ObjectId } = mongoose.Types;
const productSchema = new Schema({
  name: {
    type: String
  },
  image: {
    type: String
  },
  descriptions: {
    type: String
  },
  category: {
    type: ObjectId,
    ref: "Category"
  },
  price: {
    type: String
  },
  trailer: {
    type: String,
  },
  linkVideo: {
    type: String
  },
  seri: {
    type: String
  },
  copyright: {
    type: String
  },
  LinkCopyright: {
    type: String
  }
}, { timestamps: true });

export default mongoose.model("Products", productSchema);