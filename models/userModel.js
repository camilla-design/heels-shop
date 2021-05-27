import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      default: "user",
    },
    root: {
      type: Boolean,
      default: false,
    },
    avatar: {
      type: String,
      default:
        "https://heals-shop-uploder.s3.eu-north-1.amazonaws.com/user_solid_82f5bf1710.svg?25417873.090000007",
    },
  },
  {
    timestamps: true,
  }
);

let Dataset = mongoose.models.user || mongoose.model("user", userSchema);
export default Dataset;
