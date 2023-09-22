import { Router } from "express";
import { CreateChurchController } from "../../../../modules/church/useCases/CreateChurch/CreateChurchController";

const churchRoutes = Router();

const createChurchController = new CreateChurchController();

churchRoutes.post('/', createChurchController.handle);

export { churchRoutes };
