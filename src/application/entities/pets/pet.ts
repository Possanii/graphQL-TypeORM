import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'

import { User } from '../user/user'

@Entity('pets')
export class Pet extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  name!: string

  @ManyToOne(() => User, { nullable: true })
  user?: User
}
