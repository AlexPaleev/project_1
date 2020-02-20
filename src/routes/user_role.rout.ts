import * as express from 'express';
import Controller from '../interfaces/controller.interface';
// import CreateUser_roleDto from '../dto/user_role.dto';
import Users_roleService from '../services/user_role.service';
 
class Users_roleController implements Controller {
  public path = '/users_role';
  public router = express.Router();
  private service: Users_roleService = new Users_roleService();
 
  constructor() {
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.post(this.path, this.service.createUser_role);
    this.router.get(this.path, this.service.getAllUser_roles);
    this.router.get(`${this.path}/:id`, this.service.getUser_roleById);
    this.router.patch(`${this.path}/:id`,  this.service.modifyUser_role);
    this.router.delete(`${this.path}/:id`, this.service.deleteUser_role);
  }
}

export default Users_roleController;