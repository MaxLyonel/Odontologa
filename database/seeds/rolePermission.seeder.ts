import { RolesPermission } from "../../src/users_roles/roles_permissions/entities/roles_permission.entity";
import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";

export default class RolePermissionSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager
    ): Promise<any> {
        const rolePermissionFactory = factoryManager.get(RolesPermission)
        await rolePermissionFactory.saveMany(5)
    }
}