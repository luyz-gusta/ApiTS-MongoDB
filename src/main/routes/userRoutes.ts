import { Router } from "express";
import { GetUsersController } from "../../presentation/controllers/get-users/get-users";
import { CreateUserController } from "../../presentation/controllers/create-users/create-users";
import UsersRepository from "../../infra/repositories/user-repository";
import { adaptRoute } from "../adapters/express.adapter";

const userRouter = Router();
const userRepository = new UsersRepository();

userRouter.get("/users", adaptRoute(new GetUsersController(userRepository)))
userRouter.get("/users", adaptRoute(new CreateUserController(userRepository)))

export default userRouter;
