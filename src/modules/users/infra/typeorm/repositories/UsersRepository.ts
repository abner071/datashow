import {
  IListUsers,
  IUsersRepository,
} from "@modules/users/repositories/IUsersRepository";
import { ILike, Repository } from "typeorm";
import { dataSource } from "@shared/infra/typeorm";
import { ICreateUserDTO } from "@modules/users/dtos/ICreateUserDTO";
import { AppError } from "@shared/errors/AppError";
import { User } from "../entities/User";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = dataSource.getRepository(User);
  }

  async create({
    id,
    church_id,
    name,
    email,
    password,
    contact,
    avatar,
    updated_at,
  }: ICreateUserDTO): Promise<void> {
    try {
      const user = this.repository.create({
        id,
        church_id,
        name,
        email,
        password,
        contact,
        avatar,
        updated_at,
      });

      await this.repository.save(user);
    } catch (error) {
      throw new AppError(error);
    }
  }

  async findById(id: string): Promise<User> {
    return await this.repository.findOne({ where: { id } });
  }

  async findByEmail(email: string): Promise<User> {
    return await this.repository.findOne({ where: { email } });
  }

  async list({ id, church_id, name, email }: IListUsers): Promise<User[]> {
    const where = {};

    if (id) {
      where["id"] = id;
    }
    if (church_id) {
      where["church_id"] = church_id;
    }
    if (name) {
      where["name"] = ILike(`%${name}%`);
    }
    if (email) {
      where["email"] = email;
    }

    return await this.repository.findBy(where);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

export { UsersRepository };
