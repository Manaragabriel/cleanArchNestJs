export default class User {
  id: number;
  fullName: string;
  email: string;
  password: string;
  isActive: boolean;

  constructor(
    fullName: string,
    email: string,
    password: string,
    isActive: boolean,
  ) {
    this.fullName = fullName;
    this.email = email;
    this.password = password;
    this.isActive = isActive;
  }
}
