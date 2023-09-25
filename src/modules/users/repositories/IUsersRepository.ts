import { User } from "../infra/typeorm/entities/User";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

interface IListUsers {
  id?: string;
  name?: string;
  email?: string;
}

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findById(id: string): Promise<User>;
  findByEmail(email: string): Promise<User>;
  list({ name }: IListUsers): Promise<User[]>;
  delete(id: string): Promise<void>;
}

export { IUsersRepository, IListUsers };
