import { Injectable } from '@nestjs/common';
import { CreatePetInput } from './dto/create-pet.input';
import { UpdatePetInput } from './dto/update-pet.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PetsService {
  constructor(private prismaService: PrismaService) {}

  async create(createPetInput: CreatePetInput) {
    return await this.prismaService.pet.create({
      data: createPetInput
    })
  }

  findAll() {
    return this.prismaService.pet.findMany({
      include: {
        user: true,
        policy: true
      }
    })
  }

  findOne(id: number) {
    return this.prismaService.pet.findUnique({
      where: {
        id
      },
      include: {
        user: true,
        policy: true
      }
    })
  }

  async update(id: number, updatePetInput: UpdatePetInput) {
    return await this.prismaService.pet.update({
      where: {
        id
      },
      data: {
        name: updatePetInput.name,
        breed: updatePetInput.breed,
        birthDate: updatePetInput.birthDate
      }
    })
  }

  async remove(id: number) {
    return await this.prismaService.pet.delete({
      where: {
        id
      }
    })
  }
}
