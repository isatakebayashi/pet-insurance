import { Injectable } from '@nestjs/common';
import { CreateCoverageInput } from './dto/create-coverage.input';
import { UpdateCoverageInput } from './dto/update-coverage.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CoveragesService {
  constructor(private prismaService: PrismaService) {}

  async create(createCoverageInput: CreateCoverageInput) {
    return await this.prismaService.coverage.create({
      data: createCoverageInput
    })
  }

  findAll() {
    return this.prismaService.coverage.findMany({
      include: {
        procedures: { include: { proceduresByPlan: true } }
      }
    })
  }

  findOne(id: number) {
    return this.prismaService.coverage.findUnique({
      where: {
        id
      },
      include: {
        procedures: true
      }
    })
  }

  update(id: number, updateCoverageInput: UpdateCoverageInput) {
    return `This action updates a #${id} coverage`;
  }

  remove(id: number) {
    return `This action removes a #${id} coverage`;
  }
}
