import { Router } from "express";
import multer from "multer";
import uploadConfig from "@config/upload";

import { CreateUserController } from "@modules/users/useCases/CreateUser/CreateUserController";

const usersRoutes = Router();

const createUserController = new CreateUserController();

const uploadAvatar = multer(uploadConfig.upload("./tmp/users"));

usersRoutes.post(
  "/",
  uploadAvatar.single("avatar"),
  createUserController.handle,
);

export { usersRoutes };
