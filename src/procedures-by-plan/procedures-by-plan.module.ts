import { Module } from '@nestjs/common';
import { ProceduresByPlanService } from './procedures-by-plan.service';
import { ProceduresByPlanResolver } from './procedures-by-plan.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [ProceduresByPlanResolver, ProceduresByPlanService, PrismaService],
})
export class ProceduresByPlanModule {}
