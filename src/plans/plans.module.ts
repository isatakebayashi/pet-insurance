import { Module } from '@nestjs/common';
import { PlansService } from './plans.service';
import { PlansResolver } from './plans.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [PlansResolver, PlansService, PrismaService],
})
export class PlansModule {}
