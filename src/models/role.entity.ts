import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import UserRole from './user_role.entity';
 
@Entity()
class Role {
  @PrimaryGeneratedColumn()
  public id?: number;
 
  @Column()
  public title: string;

  @OneToMany(() => UserRole,(role: UserRole)=>role.role_)
  public userRoles: UserRole;
}
 
export default Role;