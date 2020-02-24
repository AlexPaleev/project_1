import * as express from 'express';
import UserService from '../services/user.service';


class UserController {
    private service;

    constructor() {
      this.service = new UserService();
    }

  public createUser = async (request: express.Request, response: express.Response) => {
    let newUser = await this.service.createUser(request.body);
    response.send(newUser);
  }
 
  public getAllUsers = async (response: express.Response) => {
    let users = await this.service.getAllUsers();
    response.send(users);
  }
 
  public getAllDevs = async (response: express.Response) => {
    let devs = await this.service.getAllDevs();
    response.send(devs);
  }
 
  public deleteUser = async (request: express.Request, response: express.Response) => {
    let deleteResponse = await this.service.deleteUser(request.params.id);
    response.send(deleteResponse);
  }
}
 
export default UserController;