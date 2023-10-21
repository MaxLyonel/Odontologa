import { TreatmentState } from "src/clinical_history/treatment_states/entities/treatment_state.entity";
import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
export class TreatmentStateSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager
    ): Promise<any> {
        const treatmentStateFactory = await factoryManager.get(TreatmentState)
        await treatmentStateFactory.saveMany(4)
    }
}