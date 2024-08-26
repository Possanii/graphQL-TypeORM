import { hash } from 'bcryptjs'
import { Field, ID, ObjectType } from 'type-graphql'
import {
  BaseEntity,
  BeforeInsert,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity('users')
@ObjectType()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id!: string

  @Column()
  @Field()
  firstName!: string

  @Column()
  @Field()
  lastName!: string

  @Column()
  @Field()
  email!: string

  password!: string

  @Column()
  password_hash!: string

  @BeforeInsert()
  private async hashPassword() {
    this.password_hash = await hash(this.password, 8)
  }
}
