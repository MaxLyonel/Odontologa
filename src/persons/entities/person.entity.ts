import { User } from "../../users_roles/users/entities/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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

    @OneToOne(() => User, (user) => user.id)
    user: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn()
    deletedAt: Date
}
