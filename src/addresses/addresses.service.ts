import { Injectable } from '@nestjs/common';
import { CreateAddressInput } from './dto/create-address.input';
import { UpdateAddressInput } from './dto/update-address.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AddressesService {
  constructor(private prismaService: PrismaService) {}

  create(createAddressInput: CreateAddressInput) {
    return this.prismaService.address.create({
      data: createAddressInput
    })
  }

  findAll() {
    return this.prismaService.address.findMany()
  }

  findOne(id: number) {
    return this.prismaService.address.findUnique({
      where: {
        id
      }
    })
  }

  update(id: number, updateAddressInput: UpdateAddressInput) {
    return this.prismaService.address.update({
      where: {
        id
      },
      data: {
        street: updateAddressInput.street,
        number: updateAddressInput.number
      }
    })
  }

  async remove(id: number) {
    return await this.prismaService.address.delete({
      where: {
        id
      }
    })
  }
}
