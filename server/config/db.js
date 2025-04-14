import mongoose from "mongoose";
import colors from "colors";

const connectdb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("Connected to the database".bgCyan.green);
  } catch (error) {
    console.log("Database connection failed".bgRed.white);
    console.error(error.message.red);
  }
};

export default connectdb;
