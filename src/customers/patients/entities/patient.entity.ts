import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
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

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn()
    deletedAt: Date
}
