import * as express from 'express';
import Controller from '../interfaces/controller.interface';
import Dev_projectController from '../controllers/dev_project.controll';
 
class Dev_projectRout implements Controller {
  public path = '/dev_project';
  public router = express.Router();
  private controll: Dev_projectController = new Dev_projectController();
 
  constructor() {
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.post(this.path, this.controll.CallCreateDev_project);
    this.router.get(this.path, this.controll.CallGetAllDev_projects);
    this.router.get(`${this.path}/:id`, this.controll.CallGetDev_projectById);
    this.router.delete(`${this.path}/:id`, this.controll.CallDeleteDev_project);
  }
}

export default Dev_projectRout;