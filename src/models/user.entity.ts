import { Column, Entity, OneToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Project from './project.entity';
import DevProject from './dev_project.entity';
import Role from './role.entity';
 
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

  @ManyToOne(() => Role, (role: Role) => role.user_)
  public role_: Role;
}
 
export default User;