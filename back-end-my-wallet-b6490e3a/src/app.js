import cors from "cors";
import express, { json } from "express";

import { handleError } from "./middlewares/errorMiddleware.js";
import routes from "./routers/index.js";

const app = express();
app.use(cors());
app.use(json());
app.use(routes);
app.use(handleError);

export default app;
