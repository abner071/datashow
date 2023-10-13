import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";
import { deleteFile, fileExists } from "@utils/file";
import { inject, injectable } from "tsyringe";

interface IRequest {
  id: string;
  name: string;
  contact: string;
  avatar?: string;
}

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ id, name, contact, avatar }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError("Usuário não existe!");
    }

    if (avatar) {
      const oldAvatar = `./tmp/users/${user.avatar}`;
      if (fileExists(oldAvatar)) {
        await deleteFile(oldAvatar);
      }
    }

    await this.usersRepository.create({
      id,
      church_id: user.church_id,
      name,
      email: user.email,
      password: user.password,
      contact,
      avatar: avatar || user.avatar,
      updated_at: new Date(),
    });
  }
}

export { UpdateUserUseCase };
