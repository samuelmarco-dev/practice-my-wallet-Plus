import { Router } from "express";

import { createSignIn, createSignUp } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/sign-up", createSignUp);
authRouter.post("/sign-in", createSignIn);

export default authRouter;
