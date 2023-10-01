import { User } from "src/entities/users/entities/user.entity";
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "src/entities/roles/entities/role.entity";

@Entity()
export class UsersRole {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => User, (user) => user.id)
    user: number

    @ManyToOne(() => Role, (role) => role.id)
    rol: number
}
