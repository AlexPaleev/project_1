import * as express from 'express';
import Controller from '../interfaces/controller.interface';
import validationMiddleware from '../middleware/validation.middleware';
// import CreateRoleDto from '../dto/role.dto';
import RoleService from '../services/role.service';
 
class RoleController implements Controller {
  public path = '/roles';
  public router = express.Router();
  private service: RoleService = new RoleService();
 
  constructor() {
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.post(this.path, this.service.createRole);
    this.router.get(this.path, this.service.getAllRoles);
    this.router.get(`${this.path}/:id`, this.service.getRoleById);
    this.router.patch(`${this.path}/:id`, this.service.modifyRole);
    this.router.delete(`${this.path}/:id`, this.service.deleteRole);
  }
}

export default RoleController;