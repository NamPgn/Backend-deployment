import mongoose from "mongoose";
import { Schema } from "mongoose";

const TypesSchema = new Schema({
  name: {
    type: String,
  },
  path: {
    type: String,
  },
  icon: {
    type: String,
  },
  back: {
    type: String,
  },
  categorymain: [
    {
      cates: {
        type: mongoose.Types.ObjectId,
        ref: 'Categorymain'
      },
      date: {
        type: Date, default: Date.now()
      }
    }
  ]
}, { timestamps: true });

export default mongoose.model('Types', TypesSchema);