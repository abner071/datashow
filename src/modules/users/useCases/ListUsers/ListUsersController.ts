import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListUsersUseCase } from "./ListUsersUseCase";

class ListUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id, church_id, name, email } = request.query;

    const listUsersUseCase = container.resolve(ListUsersUseCase);

    const users = await listUsersUseCase.execute({
      id: id?.toString(),
      church_id: church_id?.toString(),
      name: name?.toString(),
      email: email?.toString(),
    });

    return response.status(200).json(users);
  }
}

export { ListUsersController };
