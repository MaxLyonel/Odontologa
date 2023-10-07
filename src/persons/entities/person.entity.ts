import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Person {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    secondName: string

    @Column()
    lastName: string

    @Column()
    mothersLastName: string

    @Column()
    birthDate: Date

    @Column()
    direction: string

    @Column()
    identityCard: string

    @Column()
    gender: string
}
