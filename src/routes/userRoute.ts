import express from "express";
import UserController from "../controllers/UserController";
import { userSchema } from "../helpers/validationSchema";
import validator from "../middlewares/validationMiddleware";

const router = express.Router();
const userManager = new UserController();

router.post("/user", validator(userSchema), userManager.createUser);

export default router;
