import { SomeDb } from "../data/someDb";
import { Employee } from "./Employee.model";

export class EmployeeDataAccess {
  private employeesDataBase = new SomeDb<Employee>();

  public async addEmployee(empl: Employee) {
    empl.employedAt = new Date();
    const id = await this.employeesDataBase.insert(empl);
    return id;
  }

  public async getEmployeeById(id: string) {
    const employee = await this.employeesDataBase.getBy("id", id);
    return employee;
  }

  public async getAllEmployees() {
    return this.employeesDataBase.getAllElements();
  }
}
