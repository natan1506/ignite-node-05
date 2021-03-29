import { Request, Response } from "express";
import { UsersRepository } from "modules/users/repositories/implementations/UsersRepository";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    try {
      const all = this.listAllUsersUseCase.execute({ user_id });

      return response.status(201).json(all);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { ListAllUsersController };
