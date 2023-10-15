import { TreatmentType } from "src/clinical_history/treatment_types/entities/treatment_type.entity";
import { setSeederFactory } from "typeorm-extension";

const TREATMENT_TYPES = [
    'CURACION',
    'ORTODONCIA',
    'BLANQUEAMIENTO DENTAL',
    'CORRECCION BUCAL'
]

export default setSeederFactory(TreatmentType, async(faker) => {
    const treatmentType = new TreatmentType

    treatmentType.name = faker.helpers.arrayElement(TREATMENT_TYPES)
    treatmentType.shortName = faker.helpers.arrayElement(TREATMENT_TYPES)
    treatmentType.active = faker.datatype.boolean()

    return treatmentType
})