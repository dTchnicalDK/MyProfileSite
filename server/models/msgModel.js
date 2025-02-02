import mongoose from "mongoose";

const msgSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minLength: 3,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    subject: {
      type: String,
      required: true,
      trim: true,
      minLength: 3,
    },
    message: {
      type: String,
      required: true,
      trim: true,
      minLength: 5,
    },
  },
  { Timestamp: true }
);
const Msg = mongoose.model("message", msgSchema);

export default Msg;
