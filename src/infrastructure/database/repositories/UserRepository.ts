import Datasource from '../../../configDatabase';
import { UserModel } from '../models/UserModel';

const userRepository = Datasource.getRepository(UserModel).extend({});

export default userRepository;
