import { Permission } from "src/entities/permissions/entities/permission.entity";
import { Role } from "src/entities/roles/entities/role.entity";
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RolesPermission {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Role, (role) => role.id)
    role: number

    @ManyToOne(() => Permission, (permission) => permission.id)
    permission: number
}
