import { Person } from "../../../persons/entities/person.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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

    // @Column()
    // token: string

    @OneToOne(() => Person, (person) => person.id)
    @JoinColumn()
    person: number
}
