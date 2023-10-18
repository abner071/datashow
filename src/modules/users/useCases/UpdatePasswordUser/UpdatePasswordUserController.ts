import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdatePasswordUserUseCase } from "./UpdatePasswordUserUseCase";

class UpdatePasswordUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { password } = request.body;

    const updatePasswordUserUseCase = container.resolve(
      UpdatePasswordUserUseCase,
    );

    await updatePasswordUserUseCase.execute({ id, password });

    return response.status(200).send();
  }
}

export { UpdatePasswordUserController };
