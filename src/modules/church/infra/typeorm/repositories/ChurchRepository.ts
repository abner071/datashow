import { ILike, Repository } from "typeorm";
import { ICreateChurchDTO } from "@modules/church/dtos/ICreateChurchDTO";
import { IChurchRepository } from "@modules/church/repositories/IChurchRepository";
import { dataSource } from "@shared/infra/typeorm";
import { Church } from "../entities/Church";

class ChurchRepository implements IChurchRepository {
  private repository: Repository<Church>;

  constructor() {
    this.repository = dataSource.getRepository(Church);
  }

  async create({
    id,
    name,
    address,
    address_number,
    city,
    district,
    state,
    logo,
    updated_at,
  }: ICreateChurchDTO): Promise<void> {
    const church = this.repository.create({
      id,
      name,
      address,
      address_number,
      city,
      district,
      state,
      logo,
      updated_at,
    });

    await this.repository.save(church);
  }

  async findById(id: string): Promise<Church> {
    const church = await this.repository.findOne({ where: { id } });

    return church;
  }

  async findByName(name: string): Promise<Church> {
    const church = await this.repository.findOne({ where: { name } });

    return church;
  }

  async list({ name }: { name?: string }): Promise<Church[]> {
    const where = {};

    if (name) {
      where["name"] = ILike(`%${name}%`);
    }

    const churchs = await this.repository.findBy(where);

    return churchs;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

export { ChurchRepository };
