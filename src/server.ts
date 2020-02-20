import 'dotenv/config';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import App from './app';
import config from './ormconfig';
import UsersController from './routes/user.rout';
import ProjectController from './routes/project.rout';
import Dev_projectController from './routes/dev_project.rout';
import Users_roleController from './routes/user_role.rout';
import RoleController from './routes/role.rout';
 
(async () => {
  try {
    await createConnection(config);
  } catch (error) {
    console.log('Error while connecting to the database', error);
    return error;
  }
  const app = new App(
    [
      new UsersController, 
      new ProjectController,
      new Dev_projectController,
      new Users_roleController,
      new RoleController
    ],
    5000
  );
  app.listen();
})();