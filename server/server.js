import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";
import adminRoute from "./routes/adminRoute.js";
import projectRoute from "./routes/projectRoute.js";
import cors from "cors";
import path from "path";

// import file from directory
import connectdb from "./config/db.js";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "https://portfolio-frontend-4fk2.onrender.com", // Or better: [your frontend URL]
    credentials: true,
  })
);
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
app.use(express.urlencoded({ extended: true })); // parses form data

dotenv.config();
connectdb();

const port = process.env.PORT || 8080;

app.use("/api/v1", userRoute);
app.use("/api/v1", adminRoute);
app.use("/api/v1", projectRoute);

app.get("/", (req, res) => res.send("Welcome to my website"));

app.listen(port, () => {
  console.log(`Server started at ${port}`.bgBrightRed.white);
});
