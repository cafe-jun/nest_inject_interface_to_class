import { Test } from '@nestjs/testing';
import { FIrstParser } from './first-parser.domain';
import { IParser } from './interface/paser.interface';
import { ParserService } from './parser.service';
import { SecondParser } from './second-parser.domain';
describe('ParserService', () => {
  let parserService: ParserService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        ParserService,
        {
          provide: IParser,
          useClass: FIrstParser,
        },
      ],
    }).compile();

    parserService = moduleRef.get<ParserService>(ParserService);
  });

  describe('findAll', () => {
    it('First Interface 로 분리', async () => {
      //   const result = ['test'];
      //   jest.spyOn(parserService, 'findAll').mockImplementation(() => result);
      const result = parserService.parse('test');
      expect('testfirst').toEqual(result);
    });
  });
});
