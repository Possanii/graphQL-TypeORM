import { Query, Resolver } from 'type-graphql'

@Resolver()
export class UserResolver {
  users = ['user-1', 'user-2', 'user-3']

  @Query(() => [String])
  async getUsers(): Promise<string[]> {
    return this.users
  }
}
