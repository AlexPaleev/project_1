import * as express from 'express';
import Controller from '../interfaces/controller.interface';
import validationMiddleware from '../middleware/validation.middleware';
import CreateUserDto from '../dto/user.dto';
import UserController from '../controllers/user.controll';
 
class UsersRout implements Controller {
  public path = '/user';
  public devPath = '/dev'
  public router = express.Router();
  private controller: UserController = new UserController();
 
  constructor() {
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.post(this.path, validationMiddleware(CreateUserDto), this.controller.CallCreateUser);
    this.router.get(this.path, this.controller.CallGetAllUsers);
    this.router.get(this.devPath,  this.controller.CallGetAllDev);
    this.router.patch(`${this.path}/:id`, validationMiddleware(CreateUserDto), this.controller.CallModifyUser);
    this.router.delete(`${this.path}/:id`, this.controller.CallDeleteUser);
  }
}

export default UsersRout;