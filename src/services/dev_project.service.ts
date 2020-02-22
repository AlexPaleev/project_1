import * as express from 'express';
import { getRepository } from 'typeorm';
import Dev_project from '../models/dev_project.entity';
import User from '../models/user.entity';

class Dev_projectService {
  private dev_projectRepository = getRepository(Dev_project);
  private devRepository = getRepository(User);

  public createDev_project = async (body) => {
    const dev_projectData: Dev_project = body;
    const newDev_project = this.dev_projectRepository.create(dev_projectData);
    await this.dev_projectRepository.save(newDev_project);
    return newDev_project;
  }

  public getAllDev_projects = async () => {
    const users = await this.dev_projectRepository.find();
    return users;
  }

  public getDev_projectById = async (params) => {
    const id = params.id;
    const dev = await this.devRepository.findOne(id);
    const dev_project = await this.dev_projectRepository.find({dev_: dev});
    if (dev_project) {
      return dev_project;
    } else {
      return 'Error: Not found id';
    }
  }
 
  public deleteDev_project = async (params) => {
    const id = params.id;
    const deleteResponse = await this.dev_projectRepository.delete(id);
    if (deleteResponse.affected !== 0) {
      return 200;
    } else {
      return 'Error: No delete';
    }
  }
}

export default Dev_projectService;