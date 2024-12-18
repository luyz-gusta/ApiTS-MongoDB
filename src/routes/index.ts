import express from 'express';
import userRouter from './userRoutes';

const router = (app: express.Application) => {
    app.route('/').get((_req, res) => {
        res.send("Hello World!");
    })

    app.use([
        userRouter
    ])
}

export default router;