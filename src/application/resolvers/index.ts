import type { NonEmptyArray } from 'type-graphql'

import { PetResolvers } from './pets-resolvers'
import { UserResolver } from './user-resolver'

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const resolvers: NonEmptyArray<Function> = [UserResolver, PetResolvers]
