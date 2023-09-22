import "reflect-metadata";
import express from "express";
import "express-async-errors";
import { router } from "./routes";
import { createConnection } from "../typeorm";
import "@shared/container";
import { ErrorResponse } from "@shared/errors/ErrorResponse";

createConnection();
const app = express();

app.use(express.json());

app.use(router);

app.use(ErrorResponse);

export { app };
