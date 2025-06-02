import express, { Request, Response } from "express";

//Specify port used
const port = 3000;

export class Server {
  // This app will get all basic functionality of express
  private app = express();

  startServer() {
    // Specify the end point /hello, handle Request & Response
    this.app.get("/hello", (req: Request, res: Response) => {
      res.send("Hello");
    });

    this.app.listen(port, () => {
      console.log("Listening on port " + port);
    });
  }
}

new Server().startServer();
