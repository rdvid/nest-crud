import { Module } from '@nestjs/common';
import { LoggerService } from './logger.service';

@Module({
    controllers: [],
    providers: [LoggerService],
    imports: [],
    exports: [LoggerService]
})
export class LoggerModule {}
