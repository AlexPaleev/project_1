import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Project from './project.entity';
import User from './user.entity';
 
@Entity()
class Dev_project {
  @PrimaryGeneratedColumn()
  public id?: number;

  @ManyToOne(() => User,(user: User) => user.Dprojects)
  public dev_: User;

  @ManyToOne(() => Project,(program: Project) => program.dev_)
  public project_: Project;
}
 
export default Dev_project;