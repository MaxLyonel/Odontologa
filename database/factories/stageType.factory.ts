import { StageType } from "src/clinical_history/stage_types/entities/stage_type.entity";
import { setSeederFactory } from "typeorm-extension";

const STAGE = [
    'RUTINA',
    'DIAGNOSTICO',
    'TRATAMIENTO',
    'EMERGENCIA'
]

export default setSeederFactory(StageType, async (faker) => {
    const stageType = new StageType

    stageType.name = faker.helpers.arrayElement(STAGE)
    stageType.shortName = faker.helpers.arrayElement(STAGE)
    stageType.active = faker.datatype.boolean()

    return stageType
})