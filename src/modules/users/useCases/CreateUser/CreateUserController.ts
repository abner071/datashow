import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { church_id, name, email, password, contact } = request.body;

    const avatar = request.file?.filename;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({
      church_id,
      name,
      email,
      password,
      contact,
      avatar,
    });

    return response.status(201).send();
  }
}

export { CreateUserController };
