import { Module } from '@nestjs/common';
import { PastebinsService } from './pastebins.service';
import { PastebinsController } from './pastebins.controller';

@Module({
  controllers: [PastebinsController],
  providers: [PastebinsService]
})
export class PastebinsModule {}
