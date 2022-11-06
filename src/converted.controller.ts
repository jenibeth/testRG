import { Controller, Get, Query } from '@nestjs/common';
import { ConvertedService } from './converted.service';

@Controller()
export class ConvertedController {
  constructor(private readonly appService: ConvertedService) {}

  @Get('amountConverted')
  async convertedAmount(@Query('to') to: string, @Query('from') from: string, @Query('amount') amount: number) {

    console.log(`Init convertedAmount controller: to (${to}) - from (${from}) - amount (${amount})`);
    
    return await this.appService.convertedAmount(to, from, amount);

  }
}
