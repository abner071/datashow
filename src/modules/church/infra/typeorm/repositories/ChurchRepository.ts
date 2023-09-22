import { Repository } from "typeorm";
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
    });

    await this.repository.save(church);
  }

  async findById(id: string): Promise<Church> {
    const church = this.repository.findOne({ where: { id } });

    return church;
  }

  async findByName(name: string): Promise<Church> {
    const church = this.repository.findOne({ where: { name } });

    return church;
  }
}

export { ChurchRepository };
