import UsersRepository from "../../../infra/repositories/user-repository";
import {
  created,
  errorBadRequest,
  handleDatabaseError,
} from "../../helpers/http-helpers";
import { IController } from "../../protocols/controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";

export class CreateUserController implements IController {
  constructor(private readonly userRepository: UsersRepository) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      if (!httpRequest.body) {
        return errorBadRequest();
      }

      const user = await this.userRepository.createUser(httpRequest.body);

      return created(user);
    } catch (error) {
      return handleDatabaseError(error);
    }
  }
}
