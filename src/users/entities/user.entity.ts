import { Person } from "../../persons/entities/person.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    password: string

    @Column()
    active: boolean

    @OneToOne(() => Person, (person) => person.id)
    person: number
}
