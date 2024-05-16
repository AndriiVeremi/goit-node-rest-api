import express from "express";
import authControllers from "../controllers/authControllers.js";
import { isEmpty } from "../middlewares/isEmpty.js";
import validateBody from "../decorators/validateBody.js";
import { authSignupSchema, authSigninSchema } from "../schemas/authSchemas.js";

const authRouter = express.Router();

authRouter.post(
  "/signup",
  isEmpty,
  validateBody(authSignupSchema),
  authControllers.signup
);

authRouter.post(
  "/signin",
  isEmpty,
  validateBody(authSigninSchema),
  authControllers.signin
);

export default authRouter;
