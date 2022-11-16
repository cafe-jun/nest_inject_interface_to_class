import { IParser } from './interface/paser.interface';
import { ParserService } from './parser.service';
import { Module } from '@nestjs/common';
import { FIrstParser } from './first-parser.domain';

@Module({
  providers: [
    ParserService,
    {
      provide: IParser,
      useClass: FIrstParser,
    },
  ],
})
export class ParserModule {}
