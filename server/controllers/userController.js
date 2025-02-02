import Msg from "../models/msgModel.js";

//route page for homepage
export function homepage(req, res) {
  res.status(200).json({ msg: "welcome homepage" });
}
//route page for about page
export function about(req, res) {
  res.send("welcome about page");
}

//saviing send message to database from frontEnd
const contactMsg = async (req, res) => {
  try {
    const createdMsg = await Msg.create(req.body);
    res
      .status(201)
      .json({ msg: "message created successfully", data: createdMsg });
  } catch (error) {
    res.status(500).json({ msg: "message creation error:-", error });
  }
};

//reading all messages from database
const readmsg = async (req, res) => {
  try {
    const allMsg = await Msg.find();
    res
      .status(200)
      .json({ msg: "readmsg hit and read successfully", data: allMsg });
  } catch (error) {
    res.status(500).json({ msg: "message reading error:-", error });
  }
};

export { contactMsg, readmsg };
