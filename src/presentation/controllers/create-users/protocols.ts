import { User } from "../../../domain/models/user.model";
import { MongoUser } from "../../../infra/types/mongoUser";

export interface ICreateUserRepository{
    createUser(params: MongoUser): Promise<User>
}