import { Router, json } from "express";
import * as handlers from "./Employee.handler";

const employeesRouter = Router();

employeesRouter.use(json());
// Can add all paths for employee
// POST/GET/PUT/DELETE
employeesRouter.get("/", handlers.getAll);

employeesRouter.get("/:id", handlers.getById);

employeesRouter.post("/", handlers.addEmployee);

export default employeesRouter;
