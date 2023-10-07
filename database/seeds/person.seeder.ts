import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Person } from '../../src/persons/entities/person.entity'

export class PersonSeeder implements Seeder {
    track = false;

    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager
    ): Promise<any> {
        const repository = dataSource.getRepository(Person)
        await repository.insert([
            {
                firstName: "Leonel",
                secondName: "Maximo",
                lastName: "Vargas",
                mothersLastName: "Ramirez",
                birthDate: "1994-02-22",
                direction: "Villa el carmen 248",
                identityCard: "9101918",
                gender: "M"
            }
        ]);
    }
}
