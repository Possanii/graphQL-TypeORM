import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'

import { AppDataSource } from '@/application/config/data-source'
import { UserResolver } from '@/application/resolvers/user-resolver'

export async function main() {
  await AppDataSource.initialize()

  const schema = await buildSchema({
    resolvers: [UserResolver],
  })

  const server = new ApolloServer({
    schema,
  })

  server.listen().then(({ url }) => {
    console.log(`🚀 HTTP Server listening on ${url}`)
  })
}
