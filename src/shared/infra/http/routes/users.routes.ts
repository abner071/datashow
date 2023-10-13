import { Router } from "express";
import multer from "multer";
import uploadConfig from "@config/upload";

import { CreateUserController } from "@modules/users/useCases/CreateUser/CreateUserController";
import { UpdateUserController } from "@modules/users/useCases/UpdateUser/UpdateUserController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();

const uploadAvatar = multer(uploadConfig.upload("./tmp/users"));

usersRoutes.post(
  "/",
  uploadAvatar.single("avatar"),
  createUserController.handle,
);

usersRoutes.put(
  "/:id",
  uploadAvatar.single("avatar"),
  updateUserController.handle,
);

export { usersRoutes };
