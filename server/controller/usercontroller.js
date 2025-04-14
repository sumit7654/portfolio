import mymodel from "../model/usermodel.js";

export const contactUser = async (req, res) => {
  const { name, email, number, query } = req.body;
  try {
    if (!name || !email || !query) {
      return res.status(400).send({
        message: "All field are required",
        success: false,
      });
    }

    const newuser = await mymodel.create({
      name,
      email,
      number,
      query,
    });

    res.status(201).send({
      message: "user query saved successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      message: "error in storing data in database of user model",
      success: false,
    });
  }
};

export const getuserdata = async (req, res) => {
  try {
    const usercontact = await mymodel.find().sort({ createdAt: -1 });
    const count = await mymodel.countDocuments();
    res.status(200).send({
      message: "user data are found",
      success: true,
      data: usercontact,
      count: count,
    });
  } catch (error) {
    console.log("problem in fetching data ...", error);
    res.status(404).send({
      message: "Fetching problem in server...",
      success: false,
    });
  }
};
