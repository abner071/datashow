import { inject, injectable } from "tsyringe";
import { User } from "@modules/users/infra/typeorm/entities/User";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";

interface IRequest {
  id: string;
  church_id: string;
  name: string;
  email: string;
}

@injectable()
class ListUsersUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ id, church_id, name, email }: IRequest): Promise<User[]> {
    const users = await this.usersRepository.list({
      id,
      church_id,
      name,
      email,
    });

    return users;
  }
}

export { ListUsersUseCase };
