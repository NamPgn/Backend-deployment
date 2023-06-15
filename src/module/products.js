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
    type: mongoose.Schema.Types.Mixed ,
    ref: "Category",
  },
  seri: {
    type: String
  },
  select: {
    type: Boolean,
    default: false
  },
  uploadDate: {
    type: Date,
  },
  options: {
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
  country: {
    type: String
  },
  comments: [
    {
      commentContent: { type: String },
      user: { type: ObjectId, ref: 'User' },
      date: { type: Date, default: Date.now() }
    }
  ],
  categorymain: {
    type: mongoose.Schema.Types.Mixed,
    ref: "Categorymain",
    required: false,
  },
  typeId: {
    type: mongoose.Schema.Types.Mixed ,
    ref: 'Types',
    required: false,
  }
}, { timestamps: true });
productSchema.indexes();
productSchema.plugin(mongoosePaginate);
export default mongoose.model("Products", productSchema);