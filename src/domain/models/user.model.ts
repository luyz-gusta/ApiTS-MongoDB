import { ObjectId } from "mongodb";

export interface UserModel {
  _id: ObjectId;
  name: string;
  username: string;
  email: string;
  password: string;
  isActive?: boolean;
  lastLogin?: Date | null;
  createdAt?: Date;
  updatedAt?: Date;
  userType: string;
  profilePicture: string;
}
