import UsersRepository from "../../../infra/repositories/user-repository";
import { errorInternalServer, successRequest } from "../../helpers/http-helpers";
import { IController } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http";

export class GetUsersController implements IController {
  constructor(private readonly userRepository: UsersRepository) {}

  async handle(): Promise<HttpResponse> {
    try {
      const users = await this.userRepository.find({});

      return successRequest(users)
    } catch (error) {
      console.log(error)
      return errorInternalServer(error)
    }
  }
}
