import { Module } from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { AddressesResolver } from './addresses.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [AddressesResolver, AddressesService, PrismaService],
})
export class AddressesModule {}
