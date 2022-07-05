import { Router } from "express";

import { createFinancialEvent, getFinancialEvents, getFinancialEventsSum } from "../controllers/financialController.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";

const financialRouter = Router();

financialRouter.post("/financial-events", validateToken, createFinancialEvent);
financialRouter.get("/financial-events", validateToken, getFinancialEvents);
financialRouter.get("/financial-events/sum", validateToken, getFinancialEventsSum);

export default financialRouter;
