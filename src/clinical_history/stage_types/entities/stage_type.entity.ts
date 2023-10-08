import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class StageType {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    shortName: string

    @Column()
    active: boolean
}

