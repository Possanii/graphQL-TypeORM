import { hash } from 'bcryptjs'
import {
  BaseEntity,
  BeforeInsert,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  firstName!: string

  @Column()
  lastName!: string

  @Column()
  email!: string

  password!: string

  @Column()
  password_hash!: string

  @BeforeInsert()
  private async hashPassword() {
    this.password_hash = await hash(this.password, 8)
  }
}
