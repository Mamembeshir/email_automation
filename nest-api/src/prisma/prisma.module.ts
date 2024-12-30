import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

//make this global to acessed anywhere - to not repeat or create many module
@Global()//now the prismaService is avaliable to all de module

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
