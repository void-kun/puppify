import { UserAddress } from './user_address.entity';
import {
  BeforeInsert,
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import Model from './base';
import { UserRole } from './user_role.entity';

@Entity('user')
export class User extends Model {
  @PrimaryGeneratedColumn()
  user_id!: number;

  @Index('username_index')
  @Column({ unique: true })
  username!: string;

  @Column({ nullable: false })
  hash_password!: string;

  @Column({ nullable: true })
  firstname!: string;

  @Column({ nullable: true })
  lastname!: string;

  @Column({ nullable: true })
  telephone!: string;

  @Index('email_index')
  @Column({ unique: true })
  email!: string;

  @Column()
  email_verify_at!: Date;

  @Column()
  vertification_code!: string;

  @Column()
  lasttime_loggedin!: Date;

  @Column({ default: false })
  active!: boolean;

  @OneToOne(() => UserAddress)
  @JoinColumn()
  user_address!: UserAddress;

  @OneToMany(() => UserRole, (userRole) => userRole.user)
  userRole!: UserRole[];

  @BeforeInsert()
  async hashPassowrd() {
    this.hash_password = await bcrypt.hash(this.hash_password, 12);
  }

  static async compareHash(candidatePassword: string, hashedPassword: string) {
    return await bcrypt.compare(candidatePassword, hashedPassword);
  }

  static createVertificationCode() {
    const verificationCode = crypto.randomBytes(32).toString('hex');

    const hashedVerificationCode = crypto
      .createHash('sha256')
      .update(verificationCode)
      .digest('hex');

    return { verificationCode, hashedVerificationCode };
  }

  toJSON() {
    return {
      ...this,
      user_address: this.user_address.toJSON(),
      hash_password: undefined,
      active: undefined,
      vertification_code: undefined,
    };
  }
}
