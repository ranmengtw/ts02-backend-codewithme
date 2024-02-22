import * as dotenv from "dotenv";
dotenv.config();

import * as express from "express";
import { Request, Response, NextFunction } from "express";

import "./infrastructure/db";
import productRoute from "./representation/route/product-route";
import log from "./infrastructure/logger";
import { AppError } from "./infrastructure/errors/app-error";

const app = express();

app.use(express.json());

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    log.warn("app error", err);
    return res.status(err.statusCode).json({
      message: err.message,
      details: err.details,
    });
  }
  log.error("system error", err);
  res.status(500).json({
    message: "server error",
  });
});

app.use(productRoute);

app.listen(process.env.APP_SERVER_PORT, () => {
  log.info(`server started on port ${process.env.APP_SERVER_PORT}`);
});
