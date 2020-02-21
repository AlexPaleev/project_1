import * as express from 'express';
import { getRepository } from 'typeorm';
import CreateUserDto from '../dto/user.dto';
import User from '../models/user.entity';

class UserService {
  private userRepository = getRepository(User);

  public createUser = async (request: express.Request) => {
    const userData: CreateUserDto = request.body;
    const newUser = this.userRepository.create(userData);
    await this.userRepository.save(newUser);
    return newUser;
  }

  public getAllUsers = async (request: express.Request) => {
    const users = await this.userRepository.find();
    return users;
  }

  public getUserById = async (request: express.Request) => {
    const id = request.params.id;
    const user = await this.userRepository.findOne(id);
    if (user) {
      return user;
    } else {
      return 'Error: Not found id';
    }
  }
 
  public modifyUser = async (request: express.Request) => {
    const id = request.params.id;
    const userData: User = request.body;
    await this.userRepository.update(id, userData);
    const updatedUser = await this.userRepository.findOne(id);
    if (updatedUser) {
      return updatedUser;
    } else {
      return 'Error: No modify';
    }
  }
 
  public deleteUser = async (request: express.Request) => {
    const id = request.params.id;
    const deleteResponse = await this.userRepository.delete(id);
    if (deleteResponse.affected !== 0) {
      return 200;
    } else {
      return 'Error: No delete';
    }
  }
}

export default UserService;