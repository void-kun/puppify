import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import Model from './base';
import { Permission } from './permission.entity';
import { Role } from './role.entity';

@Entity('role_permission')
export class RolePermission extends Model {
  @PrimaryColumn()
  role_id!: number;

  @PrimaryColumn()
  permission_id!: number;

  @ManyToOne(() => Role, (role) => role.rolePermission)
  role!: Role;

  @ManyToOne(() => Permission, (permission) => permission.rolePermission)
  permission!: Permission;
}
