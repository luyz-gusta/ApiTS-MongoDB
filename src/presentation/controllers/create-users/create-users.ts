import {
  created,
  errorBadRequest,
  errorInternalServer,
} from "../../helpers/http-helpers";
import { IController } from "../../protocols/controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";
import { ICreateUserRepository } from "./protocols";

export class CreateUserController implements IController {
  constructor(private readonly createUserRepository: ICreateUserRepository) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      if (!httpRequest.body) {
        return errorBadRequest();
      }

      const user = await this.createUserRepository.createUser(httpRequest.body);

      return created(user);
    } catch (error) {
      return errorInternalServer(error);
    }
  }
}
