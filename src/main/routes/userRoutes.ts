import { NextFunction, Request, RequestHandler, Response, Router } from "express";
import { CreateUserController } from "../../presentation/controllers/create-users/create-users";
import { GetUsersController } from "../../presentation/controllers/get-users/get-users";
import { adaptRoute } from "../adapters/express.adapter";
import UsersRepository from "../../infra/repositories/user-repository";
import schemaUser from "../../infra/schemas/schemaUserRequest";
import handleYupValidationError from "../../presentation/middlewares/validationError";

const userRouter = Router();
const userRepository = new UsersRepository();

const validateBody: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => handleYupValidationError(schemaUser, req, res, next);

userRouter.get("/users", adaptRoute(new GetUsersController(userRepository)));
userRouter.post("/users", validateBody, adaptRoute(new CreateUserController(userRepository)));

export default userRouter;
