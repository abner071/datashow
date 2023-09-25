import { inject, injectable } from "tsyringe";
import { ICreateChurchDTO } from "@modules/church/dtos/ICreateChurchDTO";
import { IChurchRepository } from "@modules/church/repositories/IChurchRepository";
import { AppError } from "@shared/errors/AppError";
import { deleteFile, fileExists } from "@utils/file";

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
    const church = await this.churchRepository.findById(id);

    if (!church) {
      throw new AppError("Church does not exists!");
    }

    const oldLogo = `./tmp/church/${church.logo}`;
    if (fileExists(oldLogo)) {
      await deleteFile(oldLogo);
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
      updated_at: new Date(),
    });
  }
}

export { UpdateChurchUseCase };
