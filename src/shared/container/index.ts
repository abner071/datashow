import { container } from "tsyringe";
import { IChurchRepository } from "@modules/church/repositories/IChurchRepository";
import { ChurchRepository } from "@modules/church/infra/typeorm/repositories/ChurchRepository";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { UsersRepository } from "@modules/users/infra/typeorm/repositories/UsersRepository";

container.registerSingleton<IChurchRepository>(
  "ChurchRepository",
  ChurchRepository,
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository,
);
