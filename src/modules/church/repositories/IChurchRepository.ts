import { ICreateChurchDTO } from "@modules/church/dtos/ICreateChurchDTO";
import { Church } from "@modules/church/infra/typeorm/entities/Church";

interface IListChurchs {
  name?: string;
}

interface IChurchRepository {
  create(data: ICreateChurchDTO): Promise<void>;
  findById(id: string): Promise<Church>;
  findByName(name: string): Promise<Church>;
  list({ name }: IListChurchs): Promise<Church[]>;
}

export { IChurchRepository };
