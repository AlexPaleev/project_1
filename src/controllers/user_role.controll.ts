import * as express from 'express';
import User_rolesService from '../services/user_role.service';


class Users_roleController {
    private service = new User_rolesService();

  public CallCreateUser_role = async (request: express.Request, response: express.Response) => {
    let newUser_role = await this.service.createUser_role(request.body);
    response.send(newUser_role);
  }
 
  public CallGetAllUser_roles = async (request: express.Request, response: express.Response) => {
    let User_role = await this.service.getAllUser_roles();
    response.send(User_role);
  }
 
  public CallGetUser_roleById = async (request: express.Request, response: express.Response) => {
    let User_role = await this.service.getUser_roleById(request.body);
    response.send(User_role);
  }
}
 
export default Users_roleController;