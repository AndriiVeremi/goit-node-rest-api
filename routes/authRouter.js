import express from "express";
import authControllers from "../controllers/authControllers.js";
import { isEmpty } from "../middlewares/isEmpty.js";
import validateBody from "../decorators/validateBody.js";
import { authSignupSchema, authSigninSchema } from "../schemas/authSchemas.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  isEmpty,
  validateBody(authSignupSchema),
  authControllers.register
);

authRouter.post(
  "/login",
  isEmpty,
  validateBody(authSigninSchema),
  authControllers.login
);

export default authRouter;
