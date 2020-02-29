import * as express from 'express';
import RoleService from '../services/role.service';


class RoleController {
    private service: RoleService = new RoleService();

  public create = async (request: express.Request, response: express.Response) => {
    let newUser = await this.service.createRole(request.body);
    response.send(newUser);
  }
 
  public getAll = async (request: express.Request, response: express.Response) => {
    let projects = await this.service.getAllRoles();
    response.send(projects);
  }
 
  public delete = async (request: express.Request, response: express.Response) => {
    let deleteResponse = await this.service.deleteRole(request.params.id);
    response.send(deleteResponse);
  }
}
 
export default RoleController;