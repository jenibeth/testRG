import { Module } from '@nestjs/common';
import { ConvertedController } from './converted.controller';
import { ConvertedService } from './converted.service';
import { Axios } from "axios";
import { BirthdayModule } from './birthday/birthday.module';
import { NumberModule } from './number/number.module';

@Module({
  imports: [Axios, BirthdayModule, NumberModule],
  controllers: [ConvertedController],
  providers: [ConvertedService],
  
})
export class AppModule {}
