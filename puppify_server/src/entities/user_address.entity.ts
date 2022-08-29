import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import Model from './base';

@Entity('user_address')
export class UserAddress extends Model {
  @PrimaryGeneratedColumn()
  user_address_id!: number;

  @Column()
  address_line_1!: string;

  @Column()
  address_line_2!: string;

  @Column()
  city!: string;

  @Column()
  portal_code!: string;

  @Column()
  country!: string;

  @Column()
  telephone!: string;

  toJSON() {
    return {
      ...this,
    };
  }
}
