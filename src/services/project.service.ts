import * as express from 'express';
import { getRepository } from 'typeorm';
import CreateProjectDto from '../dto/project.dto';
import Project from '../models/project.entity';
import User from '../models/user.entity';
 
class ProjectService {
    private projectRepository = getRepository(Project);
    private pmRepository = getRepository(User);

  public createProject = async (body) => {
    const projectData: CreateProjectDto = body;
    const newProject = this.projectRepository.create(projectData);
    await this.projectRepository.save(newProject);
    return newProject;
  }
 
  public getAllProjects = async () => {
    const projects = await this.projectRepository.find();
    return projects;
  }
 
  public getProjectById = async (request: express.Request) => {
    const id = request.params.id;
    const pm = await this.pmRepository.findOne(id);
    const project = await this.projectRepository.find({pm_: pm});
    if (project) {
      return project;
    } else {
      // next(new ProjectNotFoundException(id));
      return "Error: not found";
    }
  }
 
  public modifyProject = async (params) => {
    const id = params.id;
    const projectData: Project = params.id;
    await this.projectRepository.update(id, projectData);
    const updatedProject = await this.projectRepository.findOne(id);
    if (updatedProject) {
      return updatedProject;
    } else {
      // next(new ProjectNotFoundException(id));
      return "Error: not found";
    }
  }
 
  public deleteProject = async (params) => {
    const id = params.id;
    const deleteResponse = await this.projectRepository.delete(id);
    if (deleteResponse.affected !== 0) {
      return 200;
    } else {
      // next(new ProjectNotFoundException(id));
      return "Error: not found";
    }
  }
}
 
export default ProjectService;
