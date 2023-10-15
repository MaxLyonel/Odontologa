import { Employee } from "src/employees/employee/entities/employee.entity";
import { setSeederFactory } from "typeorm-extension";
import { getAllAvailablePersonIds, getAllAvailableEmployeeTypeIds} from "../helpers/utilitarian";

const POSITION = [
    'Dentista general',
    'Especialista ortodoncia',
    'Endodoncista',
    'Asistente dental',
    'Tecnico en radiologia',
    'Tecnico en laboratorio dental',
    'Tecnico en Esterilizacion'
]

let availablePersonIds: number[] = []
let availableEmployeeTypeIds: number[] = []
let currentIndex = 0
let currentIndex2 = 0

export default setSeederFactory(Employee, async (faker) => {
    const employee = new Employee

    if(availablePersonIds.length === 0) {
        availablePersonIds = await getAllAvailablePersonIds()
        currentIndex = 0
    }
    if(availableEmployeeTypeIds.length === 0) {
        availableEmployeeTypeIds = await getAllAvailableEmployeeTypeIds()
        currentIndex2 = 0
    }
    const randomPersonId = availablePersonIds[currentIndex]
    const randomEmployeeTypeId = availableEmployeeTypeIds[currentIndex2]

    employee.position = faker.helpers.arrayElement(POSITION)
    employee.dateOfHire = faker.date.birthdate()
    employee.licenceNumber = faker.number.int({min: 2000, max: 3000})
    employee.person = randomPersonId
    employee.employeType = randomEmployeeTypeId

    currentIndex++;
    currentIndex2++;
    return employee
})