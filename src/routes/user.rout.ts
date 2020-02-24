import * as express from 'express';
import Routers from '../interfaces/routers.interface';
import validationMiddleware from '../middleware/validation.middleware';
import CreateUserDto from '../dto/user.dto';
import UserController from '../controllers/user.controller';
 
class UsersRout implements Routers {
  public path = '/user';
  public devPath = '/dev'
  public router = express.Router();
  private controller: UserController = new UserController();
 
  constructor() {
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.post(this.path, validationMiddleware(CreateUserDto), this.controller.createUser);
    this.router.get(this.path, this.controller.getAllUsers);
    this.router.get(this.devPath,  this.controller.getAllDevs);
    this.router.delete(`${this.path}/:id`, this.controller.deleteUser);
  }
}

export default UsersRout;