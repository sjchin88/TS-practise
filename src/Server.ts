import express, { NextFunction, Request, Response } from "express";
import employeesRouter from "./api/empl/Employee.route";
import reportsRouter from "./api/reports/Reports.route";

//Specify port used
const port = 3000;

export class Server {
  // This app will get all basic functionality of express
  private app = express();

  startServer() {
    // Specify the end point /hello, handle Request & Response
    // this.app.get("/hello", (req: Request, res: Response) => {
    //   res.send("Hello");
    // });

    // This map a path to employeesRouter
    this.app.use("/employees", employeesRouter);
    this.app.use("/reports", reportsRouter);

    this.app.listen(port, () => {
      //this prints the error in the console, rather than in the response!
      this.app.use(
        (err: Error, req: Request, res: Response, next: NextFunction) => {
          console.error(err.stack);
          res.send(err.message);
          next();
        }
      );
      console.log("Listening on port " + port);
    });
  }
}

new Server().startServer();
