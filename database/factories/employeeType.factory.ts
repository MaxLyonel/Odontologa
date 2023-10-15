import { EmployeeType } from "src/employees/employee_types/entities/employee_type.entity";
import { setSeederFactory } from "typeorm-extension";

const EMPLOYEE_TYPE = [
    'RECEPCIONISTA',
    'TEMPORAL',
    'PERMANENTE',
]

export default setSeederFactory(EmployeeType, async (faker) => {
    const employeeType = new EmployeeType

    employeeType.name = faker.helpers.arrayElement(EMPLOYEE_TYPE)
    employeeType.shortName = faker.helpers.arrayElement(EMPLOYEE_TYPE)

    return employeeType
})