import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { PastebinsService } from './pastebins.service';
import { CreatePastebinDto } from './dto/create-pastebin.dto';

@Controller('pastebins')
export class PastebinsController {
  constructor(private readonly pastebinsService: PastebinsService) {}

  @Post()
  create(@Body() createPastebinDto: CreatePastebinDto) {
    return this.pastebinsService.create(createPastebinDto);
  }

  @Get()
  findAll() {
    return this.pastebinsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pastebinsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pastebinsService.remove(+id);
  }
}
