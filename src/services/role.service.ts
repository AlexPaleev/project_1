import { getRepository } from 'typeorm';
import Role from '../models/role.entity';

class RoleService {
  private roleRepository;

  constructor() {
    this.roleRepository = getRepository(Role);
  }

  public createRole = async (roleData) => {
    const newRole = this.roleRepository.create(roleData);
    await this.roleRepository.save(newRole);
    return newRole;
  }

  public getAllRoles = async () => {
    const roles = await this.roleRepository.find();
    return roles;
  }
 
  public deleteRole = async (id) => {
    const deleteResponse = await this.roleRepository.delete(id);
    if (deleteResponse.affected !== 0) {
      return 'Ok';
    } else {
      return 'Error: No delete';
    }
  }
}

export default RoleService;