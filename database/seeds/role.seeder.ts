import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { Role } from "src/users_roles/roles/entities/role.entity";

export default class RoleSeeder implements Seeder {

    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager
    ): Promise<any> {
        const roleFactory = factoryManager.get(Role)
        await roleFactory.saveMany(3)
    }
}