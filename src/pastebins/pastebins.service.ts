import { Injectable } from '@nestjs/common';
import { CreatePastebinDto } from './dto/create-pastebin.dto';

@Injectable()
export class PastebinsService {
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
