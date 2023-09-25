import { IChurchRepository } from "@modules/church/repositories/IChurchRepository";
import { AppError } from "@shared/errors/AppError";
import { deleteFile, fileExists } from "@utils/file";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteChurchUseCase {
  constructor(
    @inject("ChurchRepository")
    private churchRepository: IChurchRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const church = await this.churchRepository.findById(id);

    if (!church) {
      throw new AppError("Church does not exists!");
    }

    const logo = `./tmp/church/${church.logo}`;
    if (fileExists(logo)) {
      await deleteFile(logo);
    }

    await this.churchRepository.delete(id);
  }
}

export { DeleteChurchUseCase };
