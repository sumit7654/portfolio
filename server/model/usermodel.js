import mongoose, { model, Schema } from "mongoose";

const userschema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    number: {
      type: String, //capital number
    },
    query: {
      type: String,
      default: "I subscribe your service",
    },
  },
  {
    timestamps: true,
  }
);

const mymodel = mongoose.model("User", userschema);
export default mymodel;
