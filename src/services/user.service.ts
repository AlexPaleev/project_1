import * as express from 'express';
import { getRepository } from 'typeorm';
import CreateUserDto from '../dto/user.dto';
import User from '../models/user.entity';
import Role from '../models/role.entity';
import User_role from '../models/user_role.entity';

class UserService {
  private userRepository = getRepository(User);
  private roleRepository = getRepository(Role);
  private user_roleRepository = getRepository(User_role);

  public createUser = async (body) => {
    const userData: CreateUserDto = body;
    const newUser = this.userRepository.create(userData);
    await this.userRepository.save(newUser);
    return newUser;
  }

  public getAllUsers = async () => {
    const users = await this.userRepository.find();
    return users;
  }

  public getAllDev = async () => {
    //const role = await this.roleRepository.findOne({ id: 1 });
    //const users = await this.userRepository.find();
    // let dev;
    // let devs = [];
    // for (let i = 0; i < users.length; i++) {
    //   let user: User = users[i];
    //   dev = await this.user_roleRepository.find({user_:user, role_: role});
    //   if (dev.length !== 0) {
    //     devs.push(user);
    //   } else {
    //     continue;
    //   }
    // }
    // return devs;

    const user_role = await this.user_roleRepository.find({ where: { role_: 1 } });

    console.log(user_role)
    
    const users1 = user_role.map(async item => {
      const user = await this.userRepository.findOne(item.user_)
      return user;
    })

    const result = await Promise.all(users1)

    console.log(result)
  }
 
  public modifyUser = async (params) => {
    const id = params.id;
    const userData: User = params;
    await this.userRepository.update(id, userData);
    const updatedUser = await this.userRepository.findOne(id);
    if (updatedUser) {
      return updatedUser;
    } else {
      return 'Error: No modify';
    }
  }
 
  public deleteUser = async (params) => {
    const id = params.id;
    const deleteResponse = await this.userRepository.delete(id);
    if (deleteResponse.affected !== 0) {
      return 200;
    } else {
      return 'Error: No delete';
    }
  }
}

export default UserService;