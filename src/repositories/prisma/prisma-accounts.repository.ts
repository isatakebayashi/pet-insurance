import { PrismaService } from "src/prisma.service";
import { Injectable } from "@nestjs/common";
import { AccountsRepository } from "../accounts.repository";
import { Account } from "@prisma/client";

@Injectable()
export class PrismaAccountsRepository implements AccountsRepository {
  constructor(private prisma: PrismaService) {}

  async create(name: string): Promise<Account> {
    const account = await this.prisma.account.create({
      data: {
        name
      }
    })

    return account
  }

  findAll() {
   return this.prisma.account.findMany()
  }

  findOne(id) {
    return this.prisma.user.findUnique( { where: { id }})
  }

//   async update(id, name: string, email: string, password: string): Promise<void> {
//     await this.prisma.user.update({
//       where: { id },
//       data: {
//         name,
//         email,
//         password
//       }
//     })
//   }
}