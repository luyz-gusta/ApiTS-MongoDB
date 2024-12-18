import { ObjectId } from "mongodb";

export interface User{
    _id: ObjectId,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
}