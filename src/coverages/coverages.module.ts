import { Module } from '@nestjs/common';
import { CoveragesService } from './coverages.service';
import { CoveragesResolver } from './coverages.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [CoveragesResolver, CoveragesService, PrismaService],
})
export class CoveragesModule {}
