import { Controller, Get, Query } from '@nestjs/common';
import { NumberService } from './number.service';

@Controller()
export class NumberController {
    constructor (private numberServ: NumberService) {}

    @Get('/getTheNumber')
    async number(@Query('first') first: number, @Query('second') second: number) {       
        
        return await this.numberServ.getNumber(first, second);

    }
}
