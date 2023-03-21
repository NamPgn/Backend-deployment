import mongoose from "mongoose"

const authSchema = mongoose.Schema({
    username: {
        type: String
    },
    // email: {
    //     type: String
    // },
    // image: {
    //     type: String
    // },
    password: {
        type: String
    },
    role: {
        type: Number,
        default: 0
    }

}, { collection: "user" }, { timestamps: true });

export default mongoose.model("User", authSchema)