import { getRepository } from 'typeorm';
import CreateUserDto from '../dto/user.dto';
import User from '../models/user.entity';

class UserService {
  private userRepository = getRepository(User);

  public createUser = async (body) => {
    const userData: CreateUserDto = body;
    const newUser = this.userRepository.create(userData);
    await this.userRepository.save(newUser);
    return newUser;
  }

  public getAllUsers = async () => {
    const users = await this.userRepository.find();
    return users;
  }

  public getAllDev = async () => {
    const devs = await this.userRepository.find({where: { role_: 1}});
    return devs;
  }
 
  public modifyUser = async (params) => {
    const id = params.id;
    const userData: User = params;
    await this.userRepository.update(id, userData);
    const updatedUser = await this.userRepository.findOne(id);
    if (updatedUser) {
      return updatedUser;
    } else {
      return 'Error: No modify';
    }
  }
 
  public deleteUser = async (params) => {
    const id = params.id;
    const deleteResponse = await this.userRepository.delete(id);
    if (deleteResponse.affected !== 0) {
      return 200;
    } else {
      return 'Error: No delete';
    }
  }
}

export default UserService;