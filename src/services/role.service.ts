import * as express from 'express';
import { getRepository } from 'typeorm';
// import CreateRoleDto from '../dto/role.dto';
import Role from '../models/role.entity';

class RoleService {
  private roleRepository = getRepository(Role);

  public createRole = async (request: express.Request, response: express.Response) => {
    const roleData: Role = request.body;
    const newRole = this.roleRepository.create(roleData);
    await this.roleRepository.save(newRole);
    response.send(newRole);
  }

  public getAllRoles = async (request: express.Request, response: express.Response) => {
    const roles = await this.roleRepository.find();
    response.send(roles);
  }

  public getRoleById = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const id = request.params.id;
    const role = await this.roleRepository.findOne(id);
    if (role) {
      response.send(role);
    } else {
      response.send('Error: Not found id');
    }
  }
 
  public modifyRole = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const id = request.params.id;
    const roleData: Role = request.body;
    await this.roleRepository.update(id, roleData);
    const updatedRole = await this.roleRepository.findOne(id);
    if (updatedRole) {
      response.send(updatedRole);
    } else {
      response.send('Error: No modify');
    }
  }
 
  public deleteRole = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const id = request.params.id;
    const deleteResponse = await this.roleRepository.delete(id);
    if (deleteResponse.raw[1]) {
      response.sendStatus(200);
    } else {
      response.send('Error: No delete');
    }
  }
}

export default RoleService;