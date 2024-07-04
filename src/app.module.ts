import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { BasurerosModule } from './basureros/basureros.module';

@Module({
  imports: [PrismaModule, BasurerosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
