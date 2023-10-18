import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";
import { deleteFile, fileExists } from "@utils/file";

@injectable()
class DeleteUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError("Usuário não existe!");
    }

    const avatar = `./tmp/users/${user.avatar}`;
    if (fileExists(avatar)) {
      await deleteFile(avatar);
    }

    await this.usersRepository.delete(id);
  }
}

export { DeleteUserUseCase };
