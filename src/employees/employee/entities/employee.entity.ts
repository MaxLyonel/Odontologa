import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Person } from "../../../persons/entities/person.entity";
import { EmployeeType } from "../../employee_types/entities/employee_type.entity";

@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    position: string

    @Column()
    dateOfHire: Date

    @Column()
    licenceNumber: number

    @OneToOne(() => Person)
    @JoinColumn()
    person: number

    @ManyToOne(() => EmployeeType, (employeeType) => employeeType.id)
    employeType: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn()
    deletedAt: Date
}
