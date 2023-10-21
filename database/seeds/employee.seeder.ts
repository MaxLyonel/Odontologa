import personFactory from "database/factories/person.factory";
import { Employee } from "src/employees/employee/entities/employee.entity";
import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
export class EmployeeSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager
    ): Promise<any> {
        const employeeFactory = await factoryManager.get(Employee)
        await employeeFactory.saveMany(10)
    }
}