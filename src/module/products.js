import mongoose, { Schema } from "mongoose";
const { ObjectId } = mongoose.Types;
import mongoosePaginate from 'mongoose-paginate-v2';
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
    type: Number
  },
  select: {
    type: Boolean,
    default: false
  },
  uploadDate: {
    type: Date,
  },
  seri: {
    type: String
  },
  link: {
    type: String
  },
  copyright: {
    type: String
  },
  LinkCopyright: {
    type: String
  },
  year: {
    type: String
  },
  country:{
    type: String
  },
  comments: [
    {
      commentContent: { type: String },
      user: { type: ObjectId, ref: 'User' },
      date: { type: Date, default: Date.now() }
    }
  ],
  typeId: {
    type: mongoose.Types.ObjectId,
    ref: 'Types'
  }
}, { timestamps: true });
productSchema.plugin(mongoosePaginate);
export default mongoose.model("Products", productSchema);