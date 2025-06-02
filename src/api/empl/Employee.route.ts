import { Router, Request, Response } from "express";
import * as handlers from "./Employee.handler";

const employeesRouter = Router();

// Can add all paths for employee
// POST/GET/PUT/DELETE
employeesRouter.get("/", handlers.getAll);

export default employeesRouter;
