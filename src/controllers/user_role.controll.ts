import * as express from 'express';
import User_rolesService from '../services/user_role.service';


class Users_roleController {
    private service = new User_rolesService();

  public CallCreateUser_role = async (request: express.Request, response: express.Response) => {
    let newUser_role = await this.service.createUser_role(request.body);
    response.send(newUser_role);
  }
 
  public CallGetAllUser_roles = async (request: express.Request, response: express.Response) => {
    let projects = await this.service.getAllUser_roles(request.body);
    response.send(projects);
  }
 
  public CallGetUser_roleById = async (request: express.Request, response: express.Response) => {
    let project = await this.service.getUser_roleById(request.body);
    response.send(project);
  }
 
  public CallModifyUser_role = async (request: express.Request, response: express.Response) => {
    let updatedProject = await this.service.modifyUser_role(request.body);
    response.send(updatedProject);
  }
 
  public CallDeleteUser_role = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    let deleteResponse = await this.service.deleteUser_role(request.body);
    response.send(deleteResponse);
  }
}
 
export default Users_roleController;