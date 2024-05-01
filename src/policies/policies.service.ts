import { Injectable } from '@nestjs/common';
import { CreatePolicyInput } from './dto/create-policy.input';
import { UpdatePolicyInput } from './dto/update-policy.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PoliciesService {
  constructor(private prismaService: PrismaService) {}

  async create(createPolicyInput: CreatePolicyInput) {
    return await this.prismaService.policy.create({
      data: createPolicyInput
    });
  }

  findAll() {
    return this.prismaService.policy.findMany({
      include: {
        pet: true,
        plan: true
      }
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} policy`;
  }

  update(id: number, updatePolicyInput: UpdatePolicyInput) {
    return `This action updates a #${id} policy`;
  }

  remove(id: number) {
    return `This action removes a #${id} policy`;
  }
}
