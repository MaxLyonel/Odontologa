import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EmployeeType {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    shortName: string
}
