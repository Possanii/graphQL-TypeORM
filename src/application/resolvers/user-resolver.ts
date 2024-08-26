import { Arg, Mutation, Query, Resolver } from 'type-graphql'

import { User } from '../entities/user/user'

@Resolver()
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
}
