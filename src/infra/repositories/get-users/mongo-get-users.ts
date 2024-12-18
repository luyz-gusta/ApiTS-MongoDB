import { MongoClient } from "../../../domain/database/mongo";
import { User } from "../../../domain/models/user.model";
import { IGetUsersRepository } from "../../../presentation/controllers/get-users/protocols";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    const users = await MongoClient.db
      .collection<User>("users")
      .find({})
      .toArray();
    return users;
  }
}
