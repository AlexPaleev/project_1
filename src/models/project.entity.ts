import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import User from './user.entity';
import DevProject from './dev_project.entity';
 
@Entity()
class Project {
  @PrimaryGeneratedColumn()
  public id?: number;
 
  @Column()
  public title: string;
 
  @Column()
  public description: string;

  @ManyToOne(() => User, (pm: User) => pm.projects)
  public pm_: User;

  @OneToMany(() => DevProject, (Dproject: DevProject) => Dproject.project_)
  public dev_: DevProject[];
}
 
export default Project;