import "reflect-metadata";
import express from "express";
import 'express-async-errors';
import { router } from "./routes";
import { createConnection } from "../typeorm";
import "../../container";

createConnection();
const app = express();

app.use(express.json());

app.use(router);

export { app };
