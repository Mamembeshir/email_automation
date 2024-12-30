import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.modules';// importando o modulo de autenticacao
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { PrismaModule } from './prisma/prisma.module';

// aqui podemos importar todos modulos(modulo de autenticacao, etc)
@Module({
  controllers: [AuthController],
  providers:[AuthService],
  imports: [PrismaModule],
 
})
export class AppModule {}
