import {
  AfterUpdate,
  BaseEntity,
  CreateDateColumn,
  JoinColumn,
  OneToOne,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './user.entity';

export default abstract class Model extends BaseEntity {
  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @OneToOne(() => User)
  @JoinColumn()
  updated_owner!: User | null;

  @AfterUpdate()
  async ownership(username: string) {
    const currentUser = await User.findOneBy({ username: username });
    this.updated_owner = currentUser;
  }
}
