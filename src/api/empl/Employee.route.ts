import { Router, json } from "express";
import * as handlers from "./Employee.handler";
import { validateAsEmployee } from "./ZodValidator";

const employeesRouter = Router();

employeesRouter.use(json());
// Can add all paths for employee
// POST/GET/PUT/DELETE
employeesRouter.get("/", handlers.getAll);

employeesRouter.get("/:id", handlers.getById);

// The position of validateAsEmployee is how we add the middleware
employeesRouter.post("/", validateAsEmployee, handlers.addEmployee);

export default employeesRouter;
