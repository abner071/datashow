import { Request, Response } from "express";
import { UpdateChurchUseCase } from "./UpdateChurchUseCase";
import { container } from "tsyringe";

class UpdateChurchController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, address, address_number, city, district, state } =
      request.body;
    const { id } = request.params;
    const logo = request.file?.filename;

    const updateChurchUseCase = container.resolve(UpdateChurchUseCase);

    await updateChurchUseCase.execute({
      id,
      name,
      address,
      address_number,
      city,
      district,
      state,
      logo,
    });

    return response.status(200).send();
  }
}

export { UpdateChurchController };
