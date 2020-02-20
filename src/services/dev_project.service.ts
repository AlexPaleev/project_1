import * as express from 'express';
import { getRepository } from 'typeorm';
// import CreateDev_projectDto from '../dto/dev_project.dto';
import Dev_project from '../models/dev_project.entity';

class Dev_projectService {
  private dev_projectRepository = getRepository(Dev_project);

  public createDev_project = async (request: express.Request, response: express.Response) => {
    const dev_projectData: Dev_project = request.body;
    const newDev_project = this.dev_projectRepository.create(dev_projectData);
    await this.dev_projectRepository.save(newDev_project);
    response.send(newDev_project);
  }

  public getAllDev_projects = async (request: express.Request, response: express.Response) => {
    const users = await this.dev_projectRepository.find();
    response.send(users);
  }

  public getDev_projectById = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const id = request.params.id;
    const dev_project = await this.dev_projectRepository.findOne(id);
    if (dev_project) {
      response.send(dev_project);
    } else {
      response.send('Error: Not found id');
    }
  }
 
  public modifyDev_project = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const id = request.params.id;
    const dev_projectData: Dev_project = request.body;
    await this.dev_projectRepository.update(id, dev_projectData);
    const updatedDev_project = await this.dev_projectRepository.findOne(id);
    if (updatedDev_project) {
      response.send(updatedDev_project);
    } else {
      response.send('Error: No modify');
    }
  }
 
  public deleteDev_project = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const id = request.params.id;
    const deleteResponse = await this.dev_projectRepository.delete(id);
    if (deleteResponse.raw[1]) {
      response.sendStatus(200);
    } else {
      response.send('Error: No delete');
    }
  }
}

export default Dev_projectService;