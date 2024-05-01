import { Module } from '@nestjs/common';
import { ProceduresService } from './procedures.service';
import { ProceduresResolver } from './procedures.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [ProceduresResolver, ProceduresService, PrismaService],
})
export class ProceduresModule {}
