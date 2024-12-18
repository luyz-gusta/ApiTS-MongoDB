import { MongoClient } from "../../../domain/database/mongo";
import { User } from "../../../domain/models/user.model";
import { ICreateUserRepository } from "../../../presentation/controllers/create-users/protocols";

export class MongoCreateUserRepository implements ICreateUserRepository {
  async createUser(params: Omit<User, "_id">): Promise<User> {
    const { insertedId } = await MongoClient.db
      .collection("users")
      .insertOne(params);

    const user = await MongoClient.db
      .collection<User>("users")
      .findOne({ _id: insertedId });

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }
}
