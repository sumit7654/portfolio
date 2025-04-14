import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    number: {
      type: String,
    },
    role: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  { timestamps: true }
);

adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// match password

adminSchema.methods.matchpassword = async function (enteredpassword) {
  return await bcrypt.compare(enteredpassword, this.password);
};

const adminmodel = mongoose.model("Admin", adminSchema);
export default adminmodel;
