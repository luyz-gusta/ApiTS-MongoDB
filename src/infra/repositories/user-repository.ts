import User, { IUserDocument } from "../../domain/entities/user";
import { UserModel } from "../../domain/models/user.model";
import { BaseRepository } from "./base-repository";

export default class UsersRepository extends BaseRepository<UserModel, IUserDocument>{
    constructor () {
        super(User)
    }
}