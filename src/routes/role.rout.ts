import * as express from 'express';
import Controller from '../interfaces/controller.interface';
// import CreateRoleDto from '../dto/role.dto';
import RoleController from '../controllers/role.controll';
 
class RoleRout implements Controller {
  public path = '/role';
  public router = express.Router();
  private controll: RoleController = new RoleController();
 
  constructor() {
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.post(this.path, this.controll.CallCreateRole);
    this.router.get(this.path, this.controll.CallGetAllRoles);
    this.router.delete(`${this.path}/:id`, this.controll.CallDeleteRole);
  }
}

export default RoleRout;