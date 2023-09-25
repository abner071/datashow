import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListChurchUseCase } from "./ListChurchUseCase";

interface IQueryParams {
  name?: string;
}

class ListChurchController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.query as IQueryParams;

    const listChurchUseCase = container.resolve(ListChurchUseCase);

    const churchs = await listChurchUseCase.execute({ name });

    return response.status(200).json(churchs);
  }
}

export { ListChurchController };
