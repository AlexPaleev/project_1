import * as express from 'express';
import Dev_projectService from '../services/dev_project.service';

class Dev_projectController {
    private service = new Dev_projectService();

  public CallCreateDev_project = async (request: express.Request, response: express.Response) => {
    let newProject = await this.service.createDev_project(request.body);
    response.send(newProject);
  }
 
  public CallGetAllDev_projects = async (request: express.Request, response: express.Response) => {
    let projects = await this.service.getAllDev_projects(request.body);
    response.send(projects);
  }
 
  public CallGetDev_projectById = async (request: express.Request, response: express.Response) => {
    let project = await this.service.getDev_projectById(request.body);
    response.send(project);
  }
 
  public CallModifyDev_project = async (request: express.Request, response: express.Response) => {
    let updatedProject = await this.service.modifyDev_project(request.body);
    response.send(updatedProject);
  }
 
  public CallDeleteDev_project = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    let deleteResponse = await this.service.deleteDev_project(request.body);
    response.send(deleteResponse);
  }
}
 
export default Dev_projectController;