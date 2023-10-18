import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  id: string;
  password: string;
}

@injectable()
class UpdatePasswordUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ id, password }: IRequest) {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError("Usuário não existe!");
    }

    user.password = password;

    await this.usersRepository.create(user);
  }
}

export { UpdatePasswordUserUseCase };
