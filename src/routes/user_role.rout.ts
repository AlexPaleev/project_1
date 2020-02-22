import * as express from 'express';
import Controller from '../interfaces/controller.interface';
import Users_roleController from '../controllers/user_role.controll';
 
class Users_roleRout implements Controller {
  public path = '/user_role';
  public devPass = '/dev'
  public router = express.Router();
  private controll: Users_roleController = new Users_roleController();
 
  constructor() {
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.post(this.path, this.controll.CallCreateUser_role);
    this.router.get(this.path, this.controll.CallGetAllUser_roles);
    this.router.get(`${this.path}/:id`, this.controll.CallGetUser_roleById);
  }
}

export default Users_roleRout;