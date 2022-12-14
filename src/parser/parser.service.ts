import { Module, Injectable, Inject } from '@nestjs/common';
import { FIrstParser } from './first-parser.domain';
import { IParser } from './interface/paser.interface';

@Injectable()
export class ParserService {
  constructor(@Inject(IParser) private readonly parsers: IParser) {}

  public parse(text: string): string {
    return this.parsers.parse(text);
  }
}
