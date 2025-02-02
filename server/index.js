import "dotenv/config";
import express from "express";
import connectDb from "./connections/connectDb.js";
import router from "./routers/router.js";

const app = express();
const port = process.env.PORT || 5000;

//middlewares
app.use(express.json());

//router
app.use("/api", router);

connectDb();
app.listen(process.env.PORT, () => {
  console.log(`server started on http://localhost:${port}`);
});
