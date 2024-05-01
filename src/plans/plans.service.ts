import { Injectable } from '@nestjs/common';
import { CreatePlanInput } from './dto/create-plan.input';
import { UpdatePlanInput } from './dto/update-plan.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PlansService {
  constructor(private prismaService: PrismaService) {}

  async create(createPlanInput: CreatePlanInput) {
    return await this.prismaService.plan.create({
      data: createPlanInput
    })
  }

  findAll() {
    return this.prismaService.plan.findMany({
      include: {
        policies: true,
        proceduresByPlan: true,
        coverages: true
      }
    })
  }

  findOne(id: number) {
    return this.prismaService.plan.findUnique({
      where: {
        id
      },
      include: {
        policies: true,
        proceduresByPlan: { include: { procedure: true } },
        coverages: { include: { plan: true, coverage: { include: { procedures: true}} } }
      }
    })
  }

  update(id: number, updatePlanInput: UpdatePlanInput) {
    return `This action updates a #${id} plan`;
  }

  remove(id: number) {
    return `This action removes a #${id} plan`;
  }
}
