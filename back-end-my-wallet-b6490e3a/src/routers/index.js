import { Router } from "express";

import authRouter from "./authRouter.js";
import financialRouter from "./financialRouter.js";

const routes = Router();

routes.use(authRouter);
routes.use(financialRouter);

export default routes;
