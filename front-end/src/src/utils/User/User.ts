import { UserRoles } from './UserRoles.enum';
import { UserType } from './user.type';

export class User {
  constructor() {}

  static createFakeUser(): UserType {
    return {
      name: 'John Doe',
      email: 'johndoe@mail.com',
      role: UserRoles.ADMIN,
      createdAt: '2021-01-01',
      updatedAt: '2021-01-01',
    };
  }
}
