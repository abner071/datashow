import { inject, injectable } from "tsyringe";
import { IChurchRepository } from "@modules/church/repositories/IChurchRepository";
import { Church } from "@modules/church/infra/typeorm/entities/Church";

interface IRequest {
  name?: string;
}

@injectable()
class ListChurchUseCase {
  constructor(
    @inject("ChurchRepository")
    private churchRepository: IChurchRepository,
  ) {}

  async execute({ name }: IRequest): Promise<Church[]> {
    const churchs = await this.churchRepository.list({ name });

    return churchs;
  }
}

export { ListChurchUseCase };
