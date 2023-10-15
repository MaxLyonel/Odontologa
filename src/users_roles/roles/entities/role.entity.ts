import { Permission } from "../../permissions/entities/permission.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    displayName: string

    @ManyToMany(() => Permission)
    @JoinTable()
    permission: Permission[]
}

