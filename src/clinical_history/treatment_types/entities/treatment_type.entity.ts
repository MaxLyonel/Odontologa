import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class TreatmentType {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    shortName: string

    @Column()
    active: boolean

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn()
    deletedAt: Date
}

