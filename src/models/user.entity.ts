import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Project from './project.entity';
import UserRole from './user_role.entity';
import DevProject from './dev_project.entity';
 
@Entity()
class User {
  @PrimaryGeneratedColumn()
  public id?: number;
 
  @Column()
  public firstname: string;
 
  @Column()
  public lastname: string;

  @Column()
  public email: string;

  @Column()
  public password: string;

  @OneToMany(() => Project, (project: Project) => project.pm_)
  public projects: Project[];

  @OneToMany(() => DevProject, (Dproject: DevProject) => Dproject.dev_)
  public Dprojects: DevProject[];

  @OneToMany(() => UserRole, (role: UserRole) => role.user_)
  public role_id: UserRole[];
}
 
export default User;