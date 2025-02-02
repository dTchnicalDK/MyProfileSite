import { Router } from "express";
import {
  about,
  contactMsg,
  homepage,
  readmsg,
} from "../controllers/userController.js";
const router = Router();

router.get("/", homepage);
router.get("/about", about);
router.post("/message", contactMsg);
router.get("/readmsg", readmsg);

export default router;
