import mongoose, { Schema } from "mongoose";

const trailerHompage = new Schema({
  url: {
    type: String
  }
}, { timestamps: true });

export default mongoose.model('TrilerHomePage', trailerHompage);