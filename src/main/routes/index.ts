import express, { Request, Response } from 'express';
import userRouter from './userRoutes';

const router = (app: express.Application) => {
    app.route('/').get((_req: Request, res: Response) => {
        res.send("Hello World!");
    })

    app.use([
        userRouter
    ])
}

export default router;