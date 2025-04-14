import project from "../model/projectmodel.js";

export const ourproject = async (req, res) => {
  let { title, description, language, link } = req.body;
  let preview = req.file?.filename;
  if (typeof language === "string") {
    language = language.split(",").map((item) => item.trim());
  }
  try {
    if (!title || !description || !language || !preview) {
      return res.status(400).send({
        message: "Required all field",
      });
    }
    const newproject = await project.create({
      title,
      description,
      language,
      link,
      preview,
    });
    res.status(201).send({
      message: "Project addedd successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      message: "Project not addedd to database",
      success: false,
    });
  }
};

// foe fetch data

export const getallproject = async (req, res) => {
  try {
    const projects = await project.find();
    const totalproject = await project.countDocuments();
    res.status(200).send({
      message: "Data fetched successfully",
      success: true,
      data: projects,
      count: totalproject,
    });
  } catch (error) {
    console.log("Ther is problem in fetching the data", error);
    res.status(404).send({
      message: "Problem in fetching the data",
      success: false,
    });
  }
};
