import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import dataSource from 'database/config/ormconfig';
import { UserService } from '../../users.service';

export function isPersonAlreadyExists(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string, ) {
    registerDecorator({
      name: 'isPersonAlreadyExists',
      async: true,
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
        const userService = new UserService(dataSource)
          return new Promise(async ok => {
            const person = await userService.findByPerson(value)
            if (person) {
                console.log("Si existe")
                ok(false);
            } else {
                console.log("No existe")
                ok(true);
            }
          });
        },
      },
    });
  };
}