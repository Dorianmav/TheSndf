/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { HealthcheckService } from './healthcheck.service';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Controller('healthcheck')
export class HealthcheckController {
    constructor(
        private readonly healthcheckService: HealthcheckService,
        @InjectQueue('health') private healthQueue: Queue
    ) { }

    @Post('blood')
    async setBlood() {
        await this.healthQueue.add('blood', {
            blood: 'O+',
        });
        return 'ok';
    }

    

    @Get()
    healthcheck(): string {
        return this.healthcheckService.getHealth();
    }
}