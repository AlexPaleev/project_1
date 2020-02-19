import * as express from 'express';
import Controller from '../interfaces/controller.interface';
import validationMiddleware from '../middleware/validation.middleware';
import CreateProjectDto from '../dto/project.dto';
import ProjectService from '../services/project.service';
 
class ProjectController implements Controller {
  public path = '/projects';
  public router = express.Router();
  private service: ProjectService = new ProjectService();

  constructor() {
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.post(this.path, validationMiddleware(CreateProjectDto), this.service.createProject);
    this.router.get(this.path, this.service.getAllProjects);
    this.router.get(`${this.path}/:id`, this.service.getProjectById);
    this.router.patch(`${this.path}/:id`, validationMiddleware(CreateProjectDto), this.service.modifyProject);
    this.router.delete(`${this.path}/:id`, this.service.deleteProject);
  }
}
 
export default ProjectController;