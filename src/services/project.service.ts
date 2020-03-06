import * as express from 'express';
import { getRepository } from 'typeorm';
import Project from '../models/project.entity';
import User from '../models/user.entity';
 
class ProjectService {
    private projectRepository;
    private pmRepository;

    constructor() {
      this.projectRepository = getRepository(Project);
      this.pmRepository = getRepository(User);
    }

  public createProject = async (body) => {
    const newProject = this.projectRepository.create(body);
    await this.projectRepository.save(newProject);
    return newProject;
  }
 
  public getAllProjects = async () => {
    const projects = await this.projectRepository.find();
    return projects;
  }
 
  public getProjectByIdPm = async (id) => {
    const pm = await this.pmRepository.findOne(id);
    const project = await this.projectRepository.find({pm_: pm});
    if (project.length !== 0) {
      return project;
    } else {
      // next(new ProjectNotFoundException(id));
      return "Error: not found";
    }
  }
 
  public modifyProject = async (id, body) => {
    await this.projectRepository.update(id, body);
    const updatedProject = await this.projectRepository.findOne(id);
    if (updatedProject) {
      return updatedProject;
    } else {
      // next(new ProjectNotFoundException(id));
      return "Error: not found";
    }
  }
 
  public deleteProject = async (id) => {
    const deleteResponse = await this.projectRepository.delete(id);
    if (deleteResponse.affected !== 0) {
      return 'Ok';
    } else {
      // next(new ProjectNotFoundException(id));
      return "Error: not found";
    }
  }
}
 
export default ProjectService;
