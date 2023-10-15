import { TreatmentState } from "src/clinical_history/treatment_states/entities/treatment_state.entity";
import { setSeederFactory } from "typeorm-extension";

const TREATMENT_STATE = [
    'EN PROCESO',
    'FINALIZADO',
    'CANCELADO POR EL CLIENTE',
    'CANCELADO POR EL PROFESIONAL'
]

export default setSeederFactory(TreatmentState, async (faker) => {
    const treatmentState = new TreatmentState

    treatmentState.name = faker.helpers.arrayElement(TREATMENT_STATE)
    treatmentState.shortName = faker.helpers.arrayElement(TREATMENT_STATE)
    treatmentState.active = faker.datatype.boolean()

    return treatmentState
})
