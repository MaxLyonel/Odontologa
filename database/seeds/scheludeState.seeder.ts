import { ScheludeState } from "src/agenda_appointment/schelude_states/entities/schelude_state.entity";
import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
export class ScheludeStateSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager
    ): Promise<any> {
        const scheludeStateFactory = await factoryManager.get(ScheludeState)
        await scheludeStateFactory.saveMany(3)
    }
}