import { HealthcheckModule } from './healthcheck/healthcheck.module';
import { HealthcheckService } from './healthcheck/healthcheck.service';
import { HealthcheckController } from './healthcheck/healthcheck.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    HealthcheckModule,
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),

  ],
  controllers: [
    AppController],
  providers: [
    AppService],
})
export class AppModule { }
