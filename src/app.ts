import express, { type Request, type Response } from "express";

const app = express();
const port = 5000;

const server = { app, port };

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World! sourav");
});

export default server;
