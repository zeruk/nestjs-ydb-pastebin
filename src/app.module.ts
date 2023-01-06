import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PastebinsModule } from './pastebins/pastebins.module';

@Module({
  imports: [PastebinsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
