import * as express from 'express';
import { getRepository } from 'typeorm';
import User_role from '../models/user_role.entity';

class User_rolesService {
  private user_roleRepository = getRepository(User_role);

  public createUser_role = async (body) => {
    const user_roleData: User_role = body;
    const newUser_role = this.user_roleRepository.create(user_roleData);
    await this.user_roleRepository.save(newUser_role);
    return newUser_role;
  }

  public getAllUser_roles = async () => {
    const users = await this.user_roleRepository.find();
    return users;
  }

  public getUser_roleById = async (params) => {
    const id = params.id;
    const user_role = await this.user_roleRepository.findOne(id);
    if (user_role) {
      return user_role;
    } else {
      return 'Error: Not found id';
    }
  }
}

export default User_rolesService;