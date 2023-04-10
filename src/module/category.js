import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String
  },
  linkImg: {
    type: String
  },
  des: {
    type: String
  },
  sumSeri: {
    type: String
  },
  products: [
    {
      type: mongoose.Types.ObjectId, ref: 'Products'
    }
  ],
  type: {
    type: String
  }
}, { timestamps: true });


export default mongoose.model("Category", categorySchema);