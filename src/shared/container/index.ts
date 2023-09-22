import { container } from "tsyringe";
import { IChurchRepository } from "@modules/church/repositories/IChurchRepository";
import { ChurchRepository } from "@modules/church/infra/typeorm/repositories/ChurchRepository";

container.registerSingleton<IChurchRepository>(
  "ChurchRepository",
  ChurchRepository,
);
