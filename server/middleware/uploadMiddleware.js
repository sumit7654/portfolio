import multer from "multer";
import path from "path";

// Define storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniquename = `${Date.now()}_${file.originalname}`;

    cb(null, uniquename);
  },
});

const upload = multer({ storage });
export default upload;
