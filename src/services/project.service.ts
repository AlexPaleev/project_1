import * as express from 'express';
import { getRepository } from 'typeorm';
import ProjectNotFoundException from '../exceptions/ProjectNotFoundException';
import CreateProjectDto from '../dto/project.dto';
import Project from '../models/project.entity';
 
class ProjectService {
    private projectRepository = getRepository(Project);

  public createProject = async (request: express.Request, response: express.Response) => {
    const projectData: CreateProjectDto = request.body;
    const newProject = this.projectRepository.create(projectData);
    await this.projectRepository.save(newProject);
    response.send(newProject);
  }
 
  public getAllProjects = async (request: express.Request, response: express.Response) => {
    const projects = await this.projectRepository.find();
    response.send(projects);
  }
 
  public getProjectById = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const id = request.params.id;
    const project = await this.projectRepository.findOne(id);
    if (project) {
      response.send(project);
    } else {
      next(new ProjectNotFoundException(id));
    }
  }
 
  public modifyProject = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const id = request.params.id;
    const projectData: Project = request.body;
    await this.projectRepository.update(id, projectData);
    const updatedProject = await this.projectRepository.findOne(id);
    if (updatedProject) {
      response.send(updatedProject);
    } else {
      next(new ProjectNotFoundException(id));
    }
  }
 
  public deleteProject = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const id = request.params.id;
    const deleteResponse = await this.projectRepository.delete(id);
    if (deleteResponse.raw[1]) {
      response.sendStatus(200);
    } else {
      next(new ProjectNotFoundException(id));
    }
  }
}
 
export default ProjectService;