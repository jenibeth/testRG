import { Controller,Get, Query } from '@nestjs/common';
import { BirthdayService } from './birthday.service';
import { BirthdayDto } from '../birthday-dto/birthday-dto';

@Controller('birthday')
export class BirthdayController {
   constructor (private birthdatServ: BirthdayService){}

   @Get('/getDaysUntilMyBirthday')
   getday (@Query('birthdate') birthdate: Date){
        return this.birthdatServ.calculateDays(birthdate);

   }
}
