import { setSeederFactory } from "typeorm-extension";
import { User } from "../../src/users_roles/users/entities/user.entity";
import { Person } from "../../src/persons/entities/person.entity";
import dataSource from "../../database/config/ormconfig";

function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
async function getAllAvailablePersonIds(): Promise<number[]> {
    const personIds = await dataSource.getRepository(Person)
                        .createQueryBuilder('person')
                        .select('person.id')
                        .getMany()

    // Mezcla aleatoriamente las IDs de persona para evitar duplicados
    const shuffledPersonIds = shuffleArray(personIds.map((person) => person.id));

    return shuffledPersonIds;
}

let availablePersonIds: number[] = [];
let currentIndex = 0;

export default setSeederFactory(User, async (fake) => {
    const user = new User // Creame una instancia de la entidad User

    if (availablePersonIds.length === 0) {
        availablePersonIds = await getAllAvailablePersonIds();
        currentIndex = 0;
    }

    const randomPersonId = availablePersonIds[currentIndex];

    user.username = fake.internet.userName()
    user.password = fake.internet.password()
    user.active = fake.datatype.boolean()
    user.person = randomPersonId
    currentIndex++

    return user
})