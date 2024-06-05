import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';

@Processor('health')
export class HealthProcessor {
    private readonly logger = new Logger(HealthProcessor.name);

    @Process('blood')
    handleTranscode(job: Job) {
        this.logger.debug('Start transcoding...');
        this.logger.debug(job.data);
        this.logger.debug('Transcoding completed');
    }
}