import * as express from 'express';
import Controller from '../interfaces/controller.interface';
import validationMiddleware from '../middleware/validation.middleware';
import CreateUserDto from '../dto/user.dto';
import UsersService from '../services/user.service';
 
class UsersController implements Controller {
  public path = '/users';
  public router = express.Router();
  private service: UsersService = new UsersService();
 
  constructor() {
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.post(this.path, validationMiddleware(CreateUserDto), this.service.createUser);
    this.router.get(this.path, this.service.getAllUsers);
    this.router.get(`${this.path}/:id`, this.service.getUserById);
    this.router.patch(`${this.path}/:id`, validationMiddleware(CreateUserDto), this.service.modifyUser);
    this.router.delete(`${this.path}/:id`, this.service.deleteUser);
  }
}

export default UsersController;