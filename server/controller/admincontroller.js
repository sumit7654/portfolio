// import mongoose from "mongoose";
import adminmodel from "../model/adminmodel.js";
import jwt from "jsonwebtoken";

export const adminuser = async (req, res) => {
  const { name, email, number, role, password } = req.body;

  try {
    if (!name || !email || !number || !role || !password) {
      return res.status(400).send({
        message: "Required all field!",
        success: false,
      });
    }
    const existinguser = await adminmodel.findOne({ email });
    if (!existinguser) {
      const newadmin = await adminmodel.create({
        name,
        email,
        number,
        role,
        password,
      });

      return res.status(201).send({
        message: "Admin registered successfully",

        success: true,
        token: token,
      });
    } else {
      return res.status(400).send({
        message: "User already exist",
        success: false,
      });
    }
  } catch (error) {
    console.log(error);
    // return res.status(500).send({
    //   message: "Something went wrong",
    //   success: false,
    // });
  }
};

// for login admin

export const adminlogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).send({
        message: "All field are required !",
      });
    }
    const finduser = await adminmodel.findOne({ email });
    if (!finduser) {
      return res.status(404).send({
        message: "User not found",
        success: false,
      });
    }
    if (finduser && !(await finduser.matchpassword(password))) {
      return res.status(401).send({
        message: "Invaid crenditial",
        success: false,
      });
    }
    // generate token
    const token = jwt.sign(
      {
        userId: finduser._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.status(200).send({
      message: "Login successfully",
      success: true,
      token: token,
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).send({
      message: "Internal server error",
      success: false,
    });
  }
};
