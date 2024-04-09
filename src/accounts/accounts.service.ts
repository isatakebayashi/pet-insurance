import { Injectable } from '@nestjs/common';
import { CreateAccountInput } from './dto/create-account.input';
import { UpdateAccountInput } from './dto/update-account.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AccountsService {
  constructor(private prismaService: PrismaService) {}

  create(createAccountInput: CreateAccountInput) {
    return this.prismaService.account.create({
      data: createAccountInput
    })
  }

  findAll() {
    return this.prismaService.account.findMany({
      include: {
        users: true
      }      
    })
  }

  findOne(id: number) {
    return this.prismaService.account.findFirst({
      where: {
        id
      },
      include: {
        users: true
      }
    })
  }

  update(id: number, updateAccountInput: UpdateAccountInput) {
    return this.prismaService.account.update({
      where: {
        id
      },
      data: {
        name: updateAccountInput.name
      }
    });
  }

  async remove(id: number) {
    return await this.prismaService.account.delete({
      where: {
        id
      },
    });
  }
}
