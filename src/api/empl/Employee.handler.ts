import { Response, Request, NextFunction } from "express";

export async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const allEmployees = [
      {
        name: "John",
      },
    ];
    res.json(allEmployees);
  } catch (error) {
    // Forward the error with the NextFunction from express
    next(error);
  }
}
