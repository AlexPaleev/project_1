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

  public getAllRoles = async () => {
    const roles = await this.roleRepository.find();
    return roles;
  }
 
  public deleteRole = async (params) => {
    const id = params.id;
    const deleteResponse = await this.roleRepository.delete(id);
    if (deleteResponse.affected !== 0) {
      return 200;
    } else {
      return 'Error: No delete';
    }
  }
}

export default RoleService;