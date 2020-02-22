import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import User from './user.entity';
 
@Entity()
class Role {
  @PrimaryGeneratedColumn()
  public id?: number;
 
  @Column()
  public title: string;

  @OneToMany(() => User, (user: User) => user.role_)
  public user_: User[];
}
 
export default Role;