import { inject, injectable } from "tsyringe";
import { ICreateChurchDTO } from "@modules/church/dtos/ICreateChurchDTO";
import { IChurchRepository } from "@modules/church/repositories/IChurchRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class CreateChurchUseCase {
  constructor(
    @inject("ChurchRepository")
    private churchRepository: IChurchRepository,
  ) {}

  async execute({
    name,
    address,
    address_number,
    district,
    city,
    state,
    logo,
  }: ICreateChurchDTO): Promise<void> {
    const churchAlreadyExists = await this.churchRepository.findByName(name);

    if (churchAlreadyExists) {
      throw new AppError("Church already exists!");
    }

    await this.churchRepository.create({
      name,
      address,
      address_number,
      district,
      city,
      state,
      logo,
    });
  }
}

export { CreateChurchUseCase };
