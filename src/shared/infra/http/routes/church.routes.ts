import { Router } from "express";
import { CreateChurchController } from "@modules/church/useCases/CreateChurch/CreateChurchController";
import multer from "multer";
import uploadConfig from "@config/upload";

const churchRoutes = Router();

const createChurchController = new CreateChurchController();

const uploadLogo = multer(uploadConfig.upload("./tmp/church"));

churchRoutes.post(
  "/",
  uploadLogo.single("logo"),
  createChurchController.handle,
);

export { churchRoutes };
