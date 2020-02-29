import * as express from 'express'; //
import DevProjectService from '../services/dev-project.service';

class DevProjectController {
    private service: DevProjectService = new DevProjectService();

  public create = async (request: express.Request, response: express.Response) => {
    let newProject = await this.service.createDevProject(request.body);
    response.send(newProject);
  }
 
  public getAll = async (request: express.Request, response: express.Response) => {
    let projects = await this.service.getAllDevProjects();
    response.send(projects);
  }
 
  public getDevProjectByIdDev = async (request: express.Request, response: express.Response) => {
    let project = await this.service.getDevProjectByIdDev(request.params.id);
    response.send(project);
  }
 
  public delete = async (request: express.Request, response: express.Response) => {
    let deleteResponse = await this.service.deleteDevProject(request.params.id);
    response.send(deleteResponse);
  }
}
 
export default DevProjectController;