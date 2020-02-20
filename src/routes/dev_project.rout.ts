import * as express from 'express';
import Controller from '../interfaces/controller.interface';
// import CreateDev_projectDto from '../dto/dev_project.dto';
import Dev_projectService from '../services/dev_project.service';
 
class Dev_projectController implements Controller {
  public path = '/dev_projects';
  public router = express.Router();
  private service: Dev_projectService = new Dev_projectService();
 
  constructor() {
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.post(this.path, this.service.createDev_project);
    this.router.get(this.path, this.service.getAllDev_projects);
    this.router.get(`${this.path}/:id`, this.service.getDev_projectById);
    this.router.patch(`${this.path}/:id`,  this.service.modifyDev_project);
    this.router.delete(`${this.path}/:id`, this.service.deleteDev_project);
  }
}

export default Dev_projectController;