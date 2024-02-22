import mongoose from "mongoose";
import log from "./logger";

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/trainingdb?retryWrites=true&w=majority`
  )
  .then(() => log.info(`connected to database at ${process.env.DB_HOST}`))
  .catch((err) => log.error("failed to connect to database", err));
