import { Inject, Injectable } from '@nestjs/common';
import { Driver } from 'ydb-sdk';
import { CreatePastebinDto } from './dto/create-pastebin.dto';
import { Pastebin } from './entities/pastebin.entity';

@Injectable()
export class PastebinsService {
  constructor(
    @Inject('YDB_DRIVER') private ydb: Driver,
    @Inject('PASTEBIN_ENTITY') private entity: Pastebin,
  ) {
    console.log(ydb, entity);
  }

  create(createPastebinDto: CreatePastebinDto) {
    return 'This action adds a new pastebin';
  }

  findAll() {
    return `This action returns all pastebins`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pastebin`;
  }

  remove(id: number) {
    return `This action removes a #${id} pastebin`;
  }
}
