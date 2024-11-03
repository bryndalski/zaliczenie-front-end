import { faker } from '@faker-js/faker';

export class User {
  name = "";
  surname = "";
  email = "";
  password = "";
  id = 0;

  constructor(
    name = "",
    surname = "",
    email = "",
    password = "",
    id = 0
  ) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.password = password;
    this.id = id;
  }


  static createBlank() {
    return new User(
      faker.name.firstName(),
      faker.name.lastName(),
      faker.internet.email(),
      "123",
      faker.number.int()
    );
  }
}