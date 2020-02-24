import 'dotenv/config';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import App from './app';
import config from './ormconfig';
import UserRout from './routes/user.rout';
import ProjectRout from './routes/project.rout';
import Dev_projectRout from './routes/dev-project.rout';
import RoleRout from './routes/role.rout';
 
(async () => {
  try {
    await createConnection(config);
  } catch (error) {
    console.log('Error while connecting to the database', error);
    return error;
  }
  const app = new App(
    [
      new UserRout, 
      new ProjectRout,
      new Dev_projectRout,
      new RoleRout
    ],
    5000
  );
  app.listen();
})();