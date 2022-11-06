import { Module } from '@nestjs/common';
import { ConvertedController } from './converted.controller';
import { ConvertedService } from './converted.service';
import { Axios } from "axios";
import { BirthdayModule } from './birthday/birthday.module';
import { NumberModule } from './number/number.module';
import { BirthdayController } from './birthday/birthday.controller';
import { BirthdayService } from './birthday/birthday.service';
import { NumberController } from './number/number.controller';
import { NumberService } from './number/number.service';

@Module({
  imports: [Axios, BirthdayModule, NumberModule],
  controllers: [ConvertedController,BirthdayController,NumberController],
  providers: [ConvertedService,BirthdayService, NumberService],
  
})
export class AppModule {}
