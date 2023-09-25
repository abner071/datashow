import { ICreateChurchDTO } from "@modules/church/dtos/ICreateChurchDTO";
import { IChurchRepository } from "@modules/church/repositories/IChurchRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class UpdateChurchUseCase {
  constructor(
    @inject("ChurchRepository")
    private churchRepository: IChurchRepository,
  ) {}

  async execute({
    id,
    name,
    address,
    address_number,
    district,
    city,
    state,
    logo,
  }: ICreateChurchDTO) {
    const church = this.churchRepository.findById(id);

    if (!church) {
      throw new AppError("Church is not exists!");
    }

    await this.churchRepository.create({
      id,
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

export { UpdateChurchUseCase };
