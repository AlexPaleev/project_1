import * as express from 'express';
import ProjectService from '../services/project.service';


class ProjectController {
    private service = new ProjectService();

  public CallCreateProject = async (request: express.Request, response: express.Response) => {
    let newProject = await this.service.createProject(request.body);
    response.send(newProject);
  }
 
  public CallGetAllProjects = async (request: express.Request, response: express.Response) => {
    let projects = await this.service.getAllProjects();
    response.send(projects);
  }
 
  public CallGetProjectById = async (request: express.Request, response: express.Response) => {
    let project = await this.service.getProjectById(request.params);
    response.send(project);
  }
 
  public CallModifyProject = async (request: express.Request, response: express.Response) => {
    let updatedProject = await this.service.modifyProject(request);
    response.send(updatedProject);
  }
 
  public CalldeleteProject = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    let deleteResponse = await this.service.deleteProject(request.params);
    response.send(deleteResponse);
  }
}
 
export default ProjectController;