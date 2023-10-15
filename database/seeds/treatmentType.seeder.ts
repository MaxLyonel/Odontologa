import { TreatmentType } from "src/clinical_history/treatment_types/entities/treatment_type.entity";
import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";


export class TreatmentTypeSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager
    ): Promise<any> {
        const treatmentTypeFactory = await factoryManager.get(TreatmentType)
        await treatmentTypeFactory.saveMany(4)
    }
}