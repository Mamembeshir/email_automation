import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.modules';
import { BookmarkModule } from '../bookmark/bookmark.module';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
    imports: [AuthModule, UserModule, BookmarkModule, PrismaModule],
})
export class UserModule {}
