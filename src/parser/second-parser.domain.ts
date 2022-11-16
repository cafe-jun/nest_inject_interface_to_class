import { Injectable } from '@nestjs/common';
import { IParser } from './interface/paser.interface';

@Injectable()
export class SecondParser implements IParser {
  parse(text: string): string {
    return text + 'second';
  }
}
