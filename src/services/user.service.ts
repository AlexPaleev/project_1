import * as express from 'express';
import { getRepository } from 'typeorm';
import CreateUserDto from '../dto/user.dto';
import User from '../models/user.entity';

class UsersService {
  private userRepository = getRepository(User);

  public createUser = async (request: express.Request, response: express.Response) => {
    const userData: CreateUserDto = request.body;
    const newUser = this.userRepository.create(userData);
    await this.userRepository.save(newUser);
    response.send(newUser);
  }

  public getAllUsers = async (request: express.Request, response: express.Response) => {
    const users = await this.userRepository.find();
    response.send(users);
  }

  public getUserById = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const id = request.params.id;
    const user = await this.userRepository.findOne(id);
    if (user) {
      response.send(user);
    } else {
      response.send('Error: Not found id');
    }
  }
 
  public modifyUser = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const id = request.params.id;
    const userData: User = request.body;
    await this.userRepository.update(id, userData);
    const updatedUser = await this.userRepository.findOne(id);
    if (updatedUser) {
      response.send(updatedUser);
    } else {
      response.send('Error: No modify');
    }
  }
 
  public deleteUser = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const id = request.params.id;
    const deleteResponse = await this.userRepository.delete(id);
    if (deleteResponse.raw[1]) {
      response.sendStatus(200);
    } else {
      response.send('Error: No delete');
    }
  }
}

export default UsersService;