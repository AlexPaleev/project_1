import * as express from 'express';
import { getRepository } from 'typeorm';
// import CreateRoleDto from '../dto/role.dto';
import Role from '../models/role.entity';

class RoleService {
  private roleRepository = getRepository(Role);

  public createRole = async (request: express.Request) => {
    const roleData: Role = request.body;
    const newRole = this.roleRepository.create(roleData);
    await this.roleRepository.save(newRole);
    return newRole;
  }

  public getAllRoles = async (request: express.Request) => {
    const roles = await this.roleRepository.find();
    return roles;
  }

  public getRoleById = async (request: express.Request) => {
    const id = request.params.id;
    const role = await this.roleRepository.findOne(id);
    if (role) {
      return role;
    } else {
      return 'Error: Not found id';
    }
  }
 
  public modifyRole = async (request: express.Request) => {
    const id = request.params.id;
    const roleData: Role = request.body;
    await this.roleRepository.update(id, roleData);
    const updatedRole = await this.roleRepository.findOne(id);
    if (updatedRole) {
      return updatedRole;
    } else {
      return 'Error: No modify';
    }
  }
 
  public deleteRole = async (request: express.Request) => {
    const id = request.params.id;
    const deleteResponse = await this.roleRepository.delete(id);
    if (deleteResponse.affected !== 0) {
      return 200;
    } else {
      return 'Error: No delete';
    }
  }
}

export default RoleService;