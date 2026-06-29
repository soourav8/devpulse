import express, { type Request, type Response } from "express";
import config from "./config/index.js";

const app = express();
const port = config.port;

const server = { app, port };

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World! sourav");
});

export default server;
