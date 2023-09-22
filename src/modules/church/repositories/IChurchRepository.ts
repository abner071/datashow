import { ICreateChurchDTO } from "../dtos/ICreateChurchDTO";
import { Church } from "../infra/typeorm/entities/Church";

interface IChurchRepository {
  create(data: ICreateChurchDTO): Promise<void>;
  findById(id: string): Promise<Church>;
  findByName(name: string): Promise<Church>;
}

export { IChurchRepository };
