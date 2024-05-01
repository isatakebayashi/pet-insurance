import { Injectable } from '@nestjs/common';
import { CreateProcedureByPlanInput } from './dto/create-procedure-by-plan.input';
import { UpdateProcedureByPlanInput } from './dto/update-procedure-by-plan.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProceduresByPlanService {
  constructor(private prismaService: PrismaService) {}

  async create(createProcedureByPlanInput: CreateProcedureByPlanInput) {
    return await this.prismaService.procedureByPlan.create({
      data: createProcedureByPlanInput
    })
  }

  findAll() {
    return this.prismaService.procedureByPlan.findMany({
      include: {
        procedure: true,
        plan: true
      }
    })
  }

  findOne(id: number) {
    return this.prismaService.procedureByPlan.findUnique({
      where: {
        id
      },
      include: {
        plan: true,
        procedure: true
      }
    })
  }

  async findByPlan(planId: number) {
    console.log(`planId ${planId}`)
    return await this.prismaService.procedureByPlan.findMany({
      where: {
        planId: planId
      }
    });
  }

  update(id: number, updateProceduresByPlanInput: UpdateProcedureByPlanInput) {
    return `This action updates a #${id} proceduresByPlan`;
  }

  remove(id: number) {
    return `This action removes a #${id} proceduresByPlan`;
  }
}
