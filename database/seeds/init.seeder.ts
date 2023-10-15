import { Seeder, SeederFactoryManager, runSeeders } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { PersonSeeder } from './person.seeder';
import { UserSeeder } from './user.seeder';
import PermissionSeeder from './permission.seeder';
import RoleSeeder from './role.seeder';
import { EmployeeTypeSeeder } from './employeeType.seeder';
import { EmployeeSeeder } from './employee.seeder';
import { StageTypeSeeder } from './stageType.seeder';
import { TreatmentTypeSeeder } from './treatmentType.seeder';
import { TreatmentStateSeeder } from './treatmentState.seeder';
import { ScheludeStateSeeder } from './scheludeState.seeder';

export default class InitSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager
    ): Promise<any> {
        await runSeeders(dataSource, {
            seeds: [PersonSeeder, UserSeeder,
                    PermissionSeeder, RoleSeeder,
                    EmployeeTypeSeeder, EmployeeSeeder,
                    StageTypeSeeder, TreatmentTypeSeeder,
                    TreatmentStateSeeder, ScheludeStateSeeder],
            factories: []
        })
    }
}