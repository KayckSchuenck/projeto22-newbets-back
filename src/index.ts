import express, {json} from "express";
import "express-async-errors"
import dotenv from "dotenv";
import cors from "cors";
import errorHandlingMiddleware from './middlewares/errorHandler.js'
import router from "./routes/index.js";

dotenv.config();

const app = express();

app.use(json());
app.use(cors());
app.use(router);
app.use(errorHandlingMiddleware)

export default app;