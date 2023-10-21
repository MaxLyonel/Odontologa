import { StageType } from "src/clinical_history/stage_types/entities/stage_type.entity";
import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
export class StageTypeSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager
    ): Promise<any> {
        const stageTypeFactory = await factoryManager.get(StageType)
        await stageTypeFactory.saveMany(4)
    }
}