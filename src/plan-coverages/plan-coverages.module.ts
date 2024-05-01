import { Module } from '@nestjs/common';
import { PlanCoveragesService } from './plan-coverages.service';
import { PlanCoveragesResolver } from './plan-coverages.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [PlanCoveragesResolver, PlanCoveragesService, PrismaService],
})
export class PlanCoveragesModule {}
