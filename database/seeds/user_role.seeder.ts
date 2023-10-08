import { UserRole } from "../../src/users_roles/user_role/entities/user_role.entity";
import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";

export default class UserRoleSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager
    ): Promise<any> {
        const userRoleFactory = factoryManager.get(UserRole)
        await userRoleFactory.saveMany(5)
    }
}