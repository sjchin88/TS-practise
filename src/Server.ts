import express, { Request, Response } from "express";

export class Server {
  private app = express();

  startServer() {
    this.app.get("/hello", (req: Request, res: Response) => {
      res.send("Hello");
    });
  }
}
