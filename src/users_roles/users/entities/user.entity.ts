import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Role } from "src/users_roles/roles/entities/role.entity";
import { Person } from "src/persons/entities/person.entity";


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

    @Column()
    token: string

    @OneToOne(() => Person, (person) => person.id)
    @JoinColumn()
    person: number

    @ManyToMany(() => Role)
    @JoinTable()
    role: Role[]

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn()
    deletedAt: Date
}
