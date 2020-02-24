import * as express from 'express';
import RoleService from '../services/role.service';


class RoleController {
    private service = new RoleService();

  public CallCreateRole = async (request: express.Request, response: express.Response) => {
    let newUser = await this.service.createRole(request.body);
    response.send(newUser);
  }
 
  public CallGetAllRoles = async (request: express.Request, response: express.Response) => {
    let projects = await this.service.getAllRoles();
    response.send(projects);
  }
 
  public CallDeleteRole = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    let deleteResponse = await this.service.deleteRole(request.params);
    response.send(deleteResponse);
  }
}
 
export default RoleController;