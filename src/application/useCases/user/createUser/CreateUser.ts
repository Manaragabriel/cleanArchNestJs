import { Injectable } from '@nestjs/common';
import { InputCreateUserDTO, OutputCreateUserDTO } from './DTOS';
import ICreateUser from './ICreateUser';
import userRepository from 'src/infrastructure/database/repositories/UserRepository';

@Injectable()
export default class CreateUser implements ICreateUser {
  async execute(input: InputCreateUserDTO): Promise<OutputCreateUserDTO> {
    const newUser = await userRepository.create({
      fullName: input.fullName,
      email: input.email,
      password: input.password,
      isActive: true,
    });
    return {
      id: newUser.id,
      fullName: newUser.fullName,
      email: newUser.email,
    };
  }
}
