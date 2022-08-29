import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RolePermission } from './role_permission.entity';
import { UserRole } from './user_role.entity';
import Model from './base';

@Entity('role')
export class Role extends Model {
  @PrimaryGeneratedColumn()
  role_id!: number;

  @Column({ unique: true })
  role_name!: string;

  @OneToMany(() => RolePermission, (rolePermission) => rolePermission.role)
  rolePermission!: RolePermission[];

  @OneToMany(() => UserRole, (userRole) => userRole.role)
  userRole!: UserRole[];
}
