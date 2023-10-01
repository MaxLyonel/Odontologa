import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Person } from "src/entities/persons/entities/person.entity";
import { EmployeeType } from "src/entities/employee_types/entities/employee_type.entity";

@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    position: string

    @Column()
    dateOfHire: string

    @Column()
    licenceNumber: number

    @OneToOne(() => Person)
    @JoinColumn()
    person: number

    @ManyToOne(() => EmployeeType, (employeeType) => employeeType.id)
    employeType: number
}
