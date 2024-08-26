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

@Resolver(Pet)
export class PetResolvers {
  @Query(() => [Pet])
  async getPetsFromOwner(@Arg('ownerId') ownerId: string): Promise<Pet[]> {
    return await Pet.find({
      where: { ownerId },
      select: {
        owner: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
        },
      },
    })
  }

  @Mutation(() => Pet)
  async createPet(
    @Arg('name') name: string,
    @Arg('ownerId') ownerId: string,
  ): Promise<Pet> {
    const pet = await Pet.create({
      name,
      ownerId,
    })

    await Pet.save(pet)

    return pet
  }

  @FieldResolver(() => User)
  async owner(@Root() root: Pet): Promise<User | null> {
    const owner = User.findOne({
      where: { id: root.ownerId },
    })

    return owner
  }
}
