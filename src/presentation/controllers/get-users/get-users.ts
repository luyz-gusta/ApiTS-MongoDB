import { errorInternalServer, successRequest } from "../../helpers/http-helpers";
import { IController } from "../../protocols/controller";
import { IGetUsersRepository } from "./protocols";

export class GetUsersController implements IController {
  constructor(private readonly getUsersRepository: IGetUsersRepository) {}

  async handle() {
    try {
      const users = await this.getUsersRepository.getUsers();

      return successRequest(users)
    } catch (error) {
      return errorInternalServer(error)
    }
  }
}
