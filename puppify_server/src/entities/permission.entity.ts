import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Model from './base';
import { RolePermission } from './role_permission.entity';

@Entity('permission')
export class Permission extends Model {
  @PrimaryGeneratedColumn()
  permission_id!: number;

  @Column({ unique: true })
  permission_name!: string;

  @OneToMany(
    () => RolePermission,
    (rolePermission) => rolePermission.permission
  )
  rolePermission!: RolePermission[];

  toJSON() {
    return {
      ...this,
      rolePermission: undefined,
    };
  }
}
