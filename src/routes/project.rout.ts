import * as express from 'express';
import Routers from '../interfaces/routers.interface';
import validationMiddleware from '../middleware/validation.middleware';
import CreateProjectDto from '../dto/project.dto';
import ProjectController from '../controllers/project.controller';
 
class ProjectRout implements Routers {
  public path = '/project';
  public router = express.Router();
  private controller: ProjectController = new ProjectController();

  constructor() {
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.post(this.path, validationMiddleware(CreateProjectDto), this.controller.create);
    this.router.get(this.path, this.controller.getAll);
    this.router.get(`${this.path}/:id`, this.controller.getProjectById);
    this.router.patch(`${this.path}/:id`, validationMiddleware(CreateProjectDto), this.controller.modifyProject);
    this.router.delete(`${this.path}/:id`, this.controller.delete);
  }
}
 
export default ProjectRout;