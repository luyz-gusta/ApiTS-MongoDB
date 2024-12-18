import { User } from "../../../domain/models/user.model";

export interface IGetUsersRepository{
    getUsers(): Promise<User[]>
}