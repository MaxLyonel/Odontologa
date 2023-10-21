import { EmployeeType } from "src/employees/employee_types/entities/employee_type.entity";
import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
export class EmployeeTypeSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager
    ): Promise<any> {
        const employeeTypeFactory = await factoryManager.get(EmployeeType)
        await employeeTypeFactory.saveMany(10)
    }
}