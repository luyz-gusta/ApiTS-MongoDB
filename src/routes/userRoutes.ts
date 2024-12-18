import { Request, Response, Router } from "express";
import { MongoCreateUserRepository } from "../infra/repositories/create-user/mongo-create-user";
import { MongoGetUsersRepository } from "../infra/repositories/get-users/mongo-get-users";
import { GetUsersController } from "../presentation/controllers/get-users/get-users";
import { CreateUserController } from "../presentation/controllers/create-users/create-users";

const userRouter = Router();

userRouter.get("/users", async (req: Request, res: Response) => {
  const mongoGetUsersRepository = new MongoGetUsersRepository();
  const getUsersController = new GetUsersController(mongoGetUsersRepository);

  const { body, statusCode } = await getUsersController.handle();

  res.status(statusCode).send(body);
});

userRouter.post("/users", async (req: Request, res: Response) => {
  const mongoCreateUserRepository = new MongoCreateUserRepository();
  const createUserController = new CreateUserController(
    mongoCreateUserRepository
  );

  const { body, statusCode } = await createUserController.handle({
    body: req.body,
  });

  res.status(statusCode).send(body);
});

export default userRouter;
