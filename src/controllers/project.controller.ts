import * as express from 'express';
import ProjectService from '../services/project.service';


class ProjectController {
    private service: ProjectService = new ProjectService();

  public create = async (request: express.Request, response: express.Response) => {
    let newProject = await this.service.createProject(request.body);
    response.send(newProject);
  }
 
  public getAll = async (request: express.Request, response: express.Response) => {
    let projects = await this.service.getAllProjects();
    response.send(projects);
  }
 
  public getProjectById = async (request: express.Request, response: express.Response) => {
    let project = await this.service.getProjectByIdPm(request.params.id);
    response.send(project);
  }
 
  public modifyProject = async (request: express.Request, response: express.Response) => {
    let updatedProject = await this.service.modifyProject(request.params.id, request.body);
    response.send(updatedProject);
  }
 
  public delete = async (request: express.Request, response: express.Response) => {
    let deleteResponse = await this.service.deleteProject(request.params.id);
    response.send(deleteResponse);
  }
}
 
export default ProjectController;