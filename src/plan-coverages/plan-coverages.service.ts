import { Injectable } from '@nestjs/common';
import { CreatePlanCoverageInput } from './dto/create-plan-coverage.input';
import { UpdatePlanCoverageInput } from './dto/update-plan-coverage.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PlanCoveragesService {
  constructor(private prismaService: PrismaService) {}

  async create(createPlanCoverageInput: CreatePlanCoverageInput) {
    return await this.prismaService.planCoverage.create({
      data: createPlanCoverageInput
    });
  }

  findAll() {
    return this.prismaService.planCoverage.findMany({
      include: {
        coverage: true,
        plan: true
      }
    });
  }

  findOne(id: number) {
    return this.prismaService.planCoverage.findUnique({
      where: {
        id
      },
      include: {
        coverage: true,
        plan: true
      }
    })
  }

  update(id: number, updatePlanCoverageInput: UpdatePlanCoverageInput) {
    return `This action updates a #${id} planCoverage`;
  }

  remove(id: number) {
    return `This action removes a #${id} planCoverage`;
  }
}
