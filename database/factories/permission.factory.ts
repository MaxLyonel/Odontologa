import { setSeederFactory } from "typeorm-extension";
import { Permission } from "../../src/users_roles/permissions/entities/permission.entity"

const PERMISSION = [
    'ALL'
]

export default setSeederFactory(Permission, (fake) => {
    const permission = new Permission()
    permission.name = fake.helpers.arrayElement(PERMISSION)
    permission.displayName = fake.helpers.arrayElement(PERMISSION)
    return permission
})