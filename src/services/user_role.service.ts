import * as express from 'express';
import { getRepository } from 'typeorm';
// import CreateUser_roleDto from '../dto/user_role.dto';
import User_role from '../models/user_role.entity';

class User_rolesService {
  private user_roleRepository = getRepository(User_role);

  public createUser_role = async (request: express.Request, response: express.Response) => {
    const user_roleData: User_role = request.body;
    const newUser_role = this.user_roleRepository.create(user_roleData);
    await this.user_roleRepository.save(newUser_role);
    response.send(newUser_role);
  }

  public getAllUser_roles = async (request: express.Request, response: express.Response) => {
    const users = await this.user_roleRepository.find();
    response.send(users);
  }

  public getUser_roleById = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const id = request.params.id;
    const user_role = await this.user_roleRepository.findOne(id);
    if (user_role) {
      response.send(user_role);
    } else {
      response.send('Error: Not found id');
    }
  }
 
  public modifyUser_role = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const id = request.params.id;
    const user_roleData: User_role = request.body;
    await this.user_roleRepository.update(id, user_roleData);
    const updatedUser_role = await this.user_roleRepository.findOne(id);
    if (updatedUser_role) {
      response.send(updatedUser_role);
    } else {
      response.send('Error: No modify');
    }
  }
 
  public deleteUser_role = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const id = request.params.id;
    const deleteResponse = await this.user_roleRepository.delete(id);
    if (deleteResponse.raw[1]) {
      response.sendStatus(200);
    } else {
      response.send('Error: No delete');
    }
  }
}

export default User_rolesService;