import { Role } from "../../src/users_roles/roles/entities/role.entity";
import { setSeederFactory } from "typeorm-extension";

const ROL = [
    'ADMINISTRADOR',
    'DENTISTA',
    'RECEPCIONISTA'
]

export default setSeederFactory(Role, (fake) => {
    const role = new Role()
    role.name = fake.helpers.arrayElement(ROL)
    role.displayName = fake.helpers.arrayElement(ROL)
    return role
})