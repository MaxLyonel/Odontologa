import { Seeder, SeederFactoryManager, runSeeders } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { PersonSeeder } from './person.seeder';
import { UserSeeder } from './user.seeder';
import PermissionSeeder from './permission.seeder';
import RoleSeeder from './role.seeder';
import UserRoleSeeder from './user_role.seeder';
import RolePermissionSeeder from './rolePermission.seeder';

export default class InitSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager
    ): Promise<any> {
        await runSeeders(dataSource, {
            seeds: [PersonSeeder, UserSeeder, PermissionSeeder, RoleSeeder, UserRoleSeeder, RolePermissionSeeder],
            factories: []
        })
    }
}