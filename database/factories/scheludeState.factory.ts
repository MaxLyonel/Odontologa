import { ScheludeState } from "src/agenda_appointment/schelude_states/entities/schelude_state.entity";
import { setSeederFactory } from "typeorm-extension";

const SCHELUDE_STATES = [
    'PENDIENTE',
    'CONFIRMADA',
    'CANCELADA'
]

export default setSeederFactory(ScheludeState, async (faker) => {
    const scheludeState = new ScheludeState

    scheludeState.name = faker.helpers.arrayElement(SCHELUDE_STATES)
    scheludeState.shortName = faker.helpers.arrayElement(SCHELUDE_STATES)
    scheludeState.active = faker.datatype.boolean()
    return scheludeState
})