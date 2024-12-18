import express, { Application } from "express";
import router from "./routes";
import cors from "cors";
import { config } from "dotenv";
import { MongoClient } from "./domain/database/mongo";

const main = async () => {
  config();
  const port = process.env.PORT || 8000;
  const app: Application = express();

  const corsOptions = {
    origin: "*",
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["Content-Length", "X-Kuma-Revision"],
    credentials: true,
  };

  app.use(cors(corsOptions));
  app.use(express.json());

  await MongoClient.connect()
    .then(() => {
      router(app);
      app.listen(port, () => console.log(`Server listening on port ${port}`));
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
};

main();
