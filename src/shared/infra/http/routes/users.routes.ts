import { Router } from "express";
import multer from "multer";
import uploadConfig from "@config/upload";

import { CreateUserController } from "@modules/users/useCases/CreateUser/CreateUserController";
import { UpdateUserController } from "@modules/users/useCases/UpdateUser/UpdateUserController";
import { UpdatePasswordUserController } from "@modules/users/useCases/UpdatePasswordUser/UpdatePasswordUserController";
import { ListUsersController } from "@modules/users/useCases/ListUsers/ListUsersController";
import { DeleteUserController } from "@modules/users/useCases/DeleteUser/DeleteUserController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const updatePasswordUserController = new UpdatePasswordUserController();
const listUsersController = new ListUsersController();
const deleteUserController = new DeleteUserController();

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

usersRoutes.patch("/password/:id", updatePasswordUserController.handle);

usersRoutes.get("/", listUsersController.handle);

usersRoutes.delete("/:id", deleteUserController.handle);

export { usersRoutes };
