import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { PrismaModule } from ".././prisma/prisma.module";

@Module({
    imports: [PrismaModule],
    controllers:[AuthController],
    providers:[AuthService],
})

// class modulo de autenicacao | se nao esportarmos a classe  nao estara disponivel para ser utilizada fora da class
 export class AuthModule {}
