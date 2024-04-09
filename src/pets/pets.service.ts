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
        user: true
      }
    })
  }

  findOne(id: number) {
    return this.prismaService.pet.findUnique({
      where: {
        id
      },
      include: {
        user: true
      }
    })
  }

  update(id: number, updatePetInput: UpdatePetInput) {
    return `This action updates a #${id} pet`;
  }

  remove(id: number) {
    return `This action removes a #${id} pet`;
  }
}
