import * as express from 'express';
import Controller from '../interfaces/controller.interface';
import validationMiddleware from '../middleware/validation.middleware';
import CreateProjectDto from '../dto/project.dto';
import ProjectController from '../controllers/project.controll';
 
class ProjectRout implements Controller {
  public path = '/project';
  public router = express.Router();
  private controller: ProjectController = new ProjectController();

  constructor() {
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.post(this.path, validationMiddleware(CreateProjectDto), this.controller.CallCreateProject);
    this.router.get(this.path, this.controller.CallGetAllProjects);
    this.router.get(`${this.path}/:id`, this.controller.CallGetProjectById);
    this.router.patch(`${this.path}/:id`, validationMiddleware(CreateProjectDto), this.controller.CallModifyProject);
    this.router.delete(`${this.path}/:id`, this.controller.CalldeleteProject);
  }
}
 
export default ProjectRout;