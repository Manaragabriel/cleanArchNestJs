import IBaseUseCase from 'src/application/@shared/IBaseUseCase';
import { InputCreateUserDTO, OutputCreateUserDTO } from './DTOS';

export default interface ICreateUser
  extends IBaseUseCase<InputCreateUserDTO, Promise<OutputCreateUserDTO>> {
  execute(input: InputCreateUserDTO): Promise<OutputCreateUserDTO>;
}
