import dataSource from "../../database/config/ormconfig";
import { RolesPermission } from "../../src/users_roles/roles_permissions/entities/roles_permission.entity";
import { setSeederFactory } from "typeorm-extension";
import { Role } from "../../src/users_roles/roles/entities/role.entity";
import { Permission } from "../../src/users_roles/permissions/entities/permission.entity";

export default setSeederFactory(RolesPermission, async (fake) => {
    const rolePermission = new RolesPermission()
    const roleIds = await dataSource.getRepository(Role).createQueryBuilder('role').select('role').getMany()
    const permissionIds = await dataSource.getRepository(Permission).createQueryBuilder('permission').select('permission').getMany()
    rolePermission.role = fake.helpers.arrayElement(roleIds).id
    rolePermission.permission = fake.helpers.arrayElement(permissionIds).id
    return rolePermission
})