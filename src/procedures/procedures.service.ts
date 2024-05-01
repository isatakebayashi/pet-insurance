import { Injectable } from '@nestjs/common';
import { CreateProcedureInput } from './dto/create-procedure.input';
import { UpdateProcedureInput } from './dto/update-procedure.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProceduresService {
  constructor(private prismaService: PrismaService) {}

  async create(createProcedureInput: CreateProcedureInput) {
    return await this.prismaService.procedure.create({
      data: createProcedureInput
    })
  }

  findAll() {
    return this.prismaService.procedure.findMany({
      include: {
        proceduresByPlan: true//,
       // policiesProcedure: true
      }
    })
  }

  findOne(id: number) {
    return this.prismaService.procedure.findUnique({
      where: {
        id
      }
    })
  }

  update(id: number, updateProcedureInput: UpdateProcedureInput) {
    return `This action updates a #${id} procedure`;
  }

  remove(id: number) {
    return `This action removes a #${id} procedure`;
  }
}
