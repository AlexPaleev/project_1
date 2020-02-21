import * as express from 'express';
import UserService from '../services/user.service';


class UserController {
    private service = new UserService();

  public CallCreateUser = async (request: express.Request, response: express.Response) => {
    let newUser = await this.service.createUser(request.body);
    response.send(newUser);
  }
 
  public CallGetAllUsers = async (request: express.Request, response: express.Response) => {
    let projects = await this.service.getAllUsers(request.body);
    response.send(projects);
  }
 
  public CallGetUserById = async (request: express.Request, response: express.Response) => {
    let project = await this.service.getUserById(request.body);
    response.send(project);
  }
 
  public CallModifyUser = async (request: express.Request, response: express.Response) => {
    let updatedProject = await this.service.modifyUser(request.body);
    response.send(updatedProject);
  }
 
  public CallDeleteUser = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    let deleteResponse = await this.service.deleteUser(request.body);
    response.send(deleteResponse);
  }
}
 
export default UserController;