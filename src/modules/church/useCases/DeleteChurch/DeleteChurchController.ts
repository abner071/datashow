import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteChurchUseCase } from "./DeleteChurchUseCase";

class DeleteChurchController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteChurchUseCase = container.resolve(DeleteChurchUseCase);

    await deleteChurchUseCase.execute(id);

    return response.status(200).send();
  }
}

export { DeleteChurchController };
