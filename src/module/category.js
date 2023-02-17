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
  }
}, { timestamps: true });


export default mongoose.model("Category", categorySchema);