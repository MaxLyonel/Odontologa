import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Person } from "../../../persons/entities/person.entity";

@Entity()
export class Patient {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    registerDate: Date

    @Column()
    bloodType: string

    @OneToOne(() => Person)
    @JoinColumn()
    person: number

    @ManyToOne(() => Person, (person) => person.id)
    person_reference_id: number
}
