import mongoose, { Schema } from "mongoose";
import { UserModel } from "../models/user.model";

export interface IUserDocument extends UserModel, Document {}

const userSchema = new Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    pictures: { type: [String], required: true },
    isActive: { type: Boolean, default: true },
    lastLogin: { type: Date },
    createdAt: { 
      type: Date, 
      default: () => {
        const now = new Date();
        now.setHours(now.getHours() - 3);
        return now;
      }
    },
    updatedAt: { 
      type: Date, 
      default: () => {
        const now = new Date();
        now.setHours(now.getHours() - 3);
        return now;
      }
    },
    userType: { type: String, required: true }
  });
const User = mongoose.model<IUserDocument>('User', userSchema)

export default User