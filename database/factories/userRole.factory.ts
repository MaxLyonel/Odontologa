import dataSource from "../../database/config/ormconfig";
import { Role } from "../../src/users_roles/roles/entities/role.entity";
import { UserRole } from "../../src/users_roles/user_role/entities/user_role.entity";
import { setSeederFactory } from "typeorm-extension";
import { User } from "../../src/users_roles/users/entities/user.entity";

export default setSeederFactory(UserRole, async (fake) => {
    const userRole = new UserRole()
    const roleIds = await dataSource.getRepository(Role).createQueryBuilder('role').select('role.id').getMany()
    const userIds = await dataSource.getRepository(User).createQueryBuilder('user').select('user.id').getMany()
    userRole.rol = fake.helpers.arrayElement(roleIds).id
    userRole.user = fake.helpers.arrayElement(userIds).id
    return userRole
})
