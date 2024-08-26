import {
  Arg,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from 'type-graphql'

import { Pet } from '../entities/pets/pet'
import { User } from '../entities/user/user'

@Resolver(User)
export class UserResolver {
  @Query(() => [User])
  async getUsers(): Promise<User[]> {
    return User.find()
  }

  @Mutation(() => User)
  async createUser(
    @Arg('email') email: string,
    @Arg('firstName') firstName: string,
    @Arg('lastName') lastName: string,
    @Arg('password') password: string,
  ): Promise<User> {
    const user = Object.assign(new User(), {
      email,
      firstName,
      lastName,
      password,
    })

    await User.save(user)

    return user
  }

  @FieldResolver(() => Pet)
  async pets(@Root() root: User): Promise<Pet[]> {
    return Pet.find({
      where: {
        ownerId: root.id,
      },
    })
  }
}
