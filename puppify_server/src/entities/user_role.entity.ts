import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import Model from './base';
import { Role } from './role.entity';
import { User } from './user.entity';

@Entity('user_role')
export class UserRole extends Model {
  @PrimaryColumn()
  role_id!: number;

  @PrimaryColumn()
  user_id!: number;

  @ManyToOne(() => Role, (role) => role.userRole)
  role!: Role;

  @ManyToOne(() => User, (user) => user.userRole)
  user!: User;
}
