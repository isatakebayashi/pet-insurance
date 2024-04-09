import { PrismaService } from "src/prisma.service";
import { UsersRepository } from "../users.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private prisma: PrismaService) {}

//   async create(name: string, email: string, password: string): Promise<void> {
//     await this.prisma.user.create({
//       data: {
//         name,
//         email,
//         password
//       }
//     })
//   }

  findAll() {
    return this.prisma.user.findMany()
  }

  findOne(id) {
    return this.prisma.user.findUnique( { where: { id }})
  }

  async update(id, name: string, email: string, password: string): Promise<void> {
    await this.prisma.user.update({
      where: { id },
      data: {
        name,
        email,
        password
      }
    })
  }
}