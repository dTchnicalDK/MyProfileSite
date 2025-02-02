import mongoose from "mongoose";
const uri = process.env.ATLASH_CONNECTION_URI;

const connectDb = async () => {
  try {
    await mongoose.connect(uri);
    console.log("db connected");
  } catch (error) {
    console.log("Db connection error:-", error);
  }
};

export default connectDb;
