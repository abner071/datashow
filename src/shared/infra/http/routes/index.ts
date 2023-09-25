import { Router } from "express";
import { churchRoutes } from "./church.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/church", churchRoutes);
router.use("/users", usersRoutes);

export { router };
