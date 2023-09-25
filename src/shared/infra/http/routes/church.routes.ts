import { Router } from "express";
import multer from "multer";
import uploadConfig from "@config/upload";

import { CreateChurchController } from "@modules/church/useCases/CreateChurch/CreateChurchController";
import { UpdateChurchController } from "@modules/church/useCases/UpdateChurch/UpdateChurchController";
import { ListChurchController } from "@modules/church/useCases/ListChurch/ListChurchController";
import { DeleteChurchController } from "@modules/church/useCases/DeleteChurch/DeleteChurchController";

const churchRoutes = Router();

const createChurchController = new CreateChurchController();
const updateChurchController = new UpdateChurchController();
const listChurchController = new ListChurchController();
const deleteChurchController = new DeleteChurchController();

const uploadLogo = multer(uploadConfig.upload("./tmp/church"));

churchRoutes.post(
  "/",
  uploadLogo.single("logo"),
  createChurchController.handle,
);

churchRoutes.put(
  "/:id",
  uploadLogo.single("logo"),
  updateChurchController.handle,
);

churchRoutes.get("/", listChurchController.handle);

churchRoutes.delete("/:id", deleteChurchController.handle);

export { churchRoutes };
