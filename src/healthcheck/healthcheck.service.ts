/*
https://docs.nestjs.com/providers#services
*/

import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class HealthcheckService {

    

    getHealth(): string {
        return "ok";
      }
}
