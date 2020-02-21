import * as express from 'express';
import RoleService from '../services/role.service';


class RoleController {
    private service = new RoleService();

  public CallCreateRole = async (request: express.Request, response: express.Response) => {
    let newUser = await this.service.createRole(request.body);
    response.send(newUser);
  }
 
  public CallGetAllRoles = async (request: express.Request, response: express.Response) => {
    let projects = await this.service.getAllRoles(request.body);
    response.send(projects);
  }
 
  public CallGetRoleById = async (request: express.Request, response: express.Response) => {
    let project = await this.service.getRoleById(request.body);
    response.send(project);
  }
 
  public CallModifyRole = async (request: express.Request, response: express.Response) => {
    let updatedProject = await this.service.modifyRole(request.body);
    response.send(updatedProject);
  }
 
  public CallDeleteRole = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    let deleteResponse = await this.service.deleteRole(request.body);
    response.send(deleteResponse);
  }
}
 
export default RoleController;