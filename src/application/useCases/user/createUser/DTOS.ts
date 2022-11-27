export interface InputCreateUserDTO {
  fullName: string;
  email: string;
  password: string;
}

export interface OutputCreateUserDTO {
  id: number;
  fullName: string;
  email: string;
}
