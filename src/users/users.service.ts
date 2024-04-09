import { Injectable, Logger } from '@nestjs/common';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from 'src/prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);
  constructor(private prismaService: PrismaService) { }

  create(createUserInput: CreateUserInput) {
    this.logger.log(`createUserInput ${JSON.stringify(createUserInput)}`);
    const item = {
      ...createUserInput,
      pets: {
        create: createUserInput.pets
      },
    } as Prisma.UserCreateInput;
    
    return this.prismaService.user.create({
      data: item,
      include: {
        pets: true
      }
    })
  }

  findAll() {
    return this.prismaService.user.findMany({
      include: {
        pets: true
      }
    })
  }

  findOne(id: number) {
    return this.prismaService.user.findFirst({
      where: {
        id
      }
    })
  }

  findByEmail(email: string) {
    return this.prismaService.user.findFirst({
      where: {
        email
      },
      include: {
        addresses: true,
        pets: true
      }
    })
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return this.prismaService.user.update({
      where: {
        id
      },
      data: {
        name: updateUserInput.name,
        accountId: updateUserInput.accountId,
        email: updateUserInput.email,
        password: updateUserInput.password
      }
    })
  }

  async remove(id: number) {
    return await this.prismaService.user.delete({
      where: {
        id
      }
    })
  }
}
