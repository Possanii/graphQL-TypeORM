import { Field, ID } from 'type-graphql'
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
  @Field(() => ID)
  id!: string

  @Column()
  @Field()
  name!: string

  @ManyToOne(() => User, { nullable: true })
  @Field()
  user?: User
}
