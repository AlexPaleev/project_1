import { getRepository } from 'typeorm';
import DevProject from '../models/dev-project.entity';
import User from '../models/user.entity';

class DevProjectService {
  private devProjectRepository;
  private devRepository;

  constructor() {
    this.devProjectRepository = getRepository(DevProject);
    this.devRepository = getRepository(User);
  }

  public createDevProject = async (devProjectData) => {
    const newDevProject = this.devProjectRepository.create(devProjectData);
    await this.devProjectRepository.save(newDevProject);
    return newDevProject;
  }

  public getAllDevProjects = async () => {
    const users = await this.devProjectRepository.find();
    return users;
  }

  public getDevProjectByIdDev = async (idDev) => {
    const dev = await this.devRepository.findOne({id:JSON.parse(idDev)});
    const devProject = await this.devProjectRepository.find({dev_: dev});
    if (devProject.length !== 0) {
      return devProject;
    } else {
      return 'Error: Not found';
    }
  }
 
  public deleteDevProject = async (id) => {
    const deleteResponse = await this.devProjectRepository.delete(id);
    if (deleteResponse.affected !== 0) {
      return 'Ok';
    } else {
      return 'Error: No delete';
    }
  }
}

export default DevProjectService;