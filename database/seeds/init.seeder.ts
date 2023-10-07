import { Seeder, SeederFactoryManager, runSeeders } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { PersonSeeder } from './person.seeder';

export default class InitSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager
    ): Promise<any> {
        await runSeeders(dataSource, {
            seeds: [PersonSeeder],
            factories: []
        })
    }
}