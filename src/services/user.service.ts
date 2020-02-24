import { getRepository } from 'typeorm';
import User from '../models/user.entity';

class UserService {
  private userRepository;

  constructor() {
    this.userRepository = getRepository(User);
  }

  public createUser = async (userData) => {
    const newUser = this.userRepository.create(userData);
    await this.userRepository.save(newUser);
    return newUser;
  }

  public getAllUsers = async () => {
    const users = await this.userRepository.find();
    return users;
  }

  public getAllDevs = async () => {
    const devs = await this.userRepository.find({where: { role_: 1}});
    return devs;
  }
 
  public deleteUser = async (id) => {
    const deleteResponse = await this.userRepository.delete(id);
    if (deleteResponse.affected !== 0) {
      return 'Ok';
    } else {
      return 'Error: No delete';
    }
  }
}

export default UserService;