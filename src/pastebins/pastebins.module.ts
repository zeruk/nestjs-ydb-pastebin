import { Module } from '@nestjs/common';
import { PastebinsService } from './pastebins.service';
import { PastebinsController } from './pastebins.controller';
import { PastebinProviders } from './entities/pastebin.providers';
import { DatabaseProvider } from 'src/system/database.providers';

@Module({
  controllers: [PastebinsController],
  providers: [PastebinsService, DatabaseProvider, ...PastebinProviders],
  imports: [],
})
export class PastebinsModule {}
