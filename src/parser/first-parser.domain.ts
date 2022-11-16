import { Injectable } from '@nestjs/common';
import { IParser } from './interface/paser.interface';

@Injectable()
export class FIrstParser implements IParser {
  parse(text: string): string {
    return text + 'first';
  }
}
