import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateChurchUseCase } from "./CreateChurchUseCase";


class CreateChurchController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      address,
      address_number,
      city,
      district,
      state,
      logo,
    } = request.body;

    const createChurchUseCase = container.resolve(CreateChurchUseCase);

    await createChurchUseCase.execute({
      name,
      address,
      address_number,
      city,
      district,
      state,
      logo,
    });

    return response.status(201).send();
  }
}

export { CreateChurchController };
