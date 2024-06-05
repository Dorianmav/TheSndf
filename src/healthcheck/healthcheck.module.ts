
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { HealthcheckController } from './healthcheck.controller';
import { HealthcheckService } from './healthcheck.service';
import { BullModule } from '@nestjs/bull';
import { join } from 'path';
import { HealthProcessor } from './healthcheck.processor';

@Module({
    imports: [
        BullModule.forRoot({
            redis: {
              host: 'localhost',
              port: 6379,
            },
          }),
        BullModule.registerQueue({
            name: 'health',
          }),
    ],
    controllers: [HealthcheckController],
    providers: [HealthcheckService, HealthProcessor],
})
export class HealthcheckModule {}
