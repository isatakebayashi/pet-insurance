import { Module } from '@nestjs/common';
import { PoliciesService } from './policies.service';
import { PoliciesResolver } from './policies.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [PoliciesResolver, PoliciesService, PrismaService],
})
export class PoliciesModule {}
