import { Router } from "express";
import { churchRoutes } from "./church.routes";

const router = Router();

router.use('/church', churchRoutes);

export { router };