import * as express from 'express';
import Routers from '../interfaces/routers.interface';
import DevProjectController from '../controllers/dev-project.controller';
 
class DevProjectRout implements Routers {
  public path = '/dev_project';
  public router = express.Router();
  private controll: DevProjectController = new DevProjectController();
 
  constructor() {
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.post(this.path, this.controll.create);
    this.router.get(this.path, this.controll.getAll);
    this.router.get(`${this.path}/:id`, this.controll.getDevProjectByIdDev);
    this.router.delete(`${this.path}/:id`, this.controll.delete);
  }
}

export default DevProjectRout;