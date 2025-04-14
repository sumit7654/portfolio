import mongoose from "mongoose";

const projectschema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    language: {
      type: [String],
      required: true,
    },
    link: {
      type: String,
    },
    preview: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const project = mongoose.model("Project", projectschema); //project hi database me ja kar projects naam ki collection banata hai ye plural hai
export default project;
