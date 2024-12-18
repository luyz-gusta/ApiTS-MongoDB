import { User } from "../../domain/models/user.model";

export type MongoUser = Omit<User, '_id'>