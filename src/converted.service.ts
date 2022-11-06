import { Injectable } from '@nestjs/common';

const axios = require('axios');

const appId = '0f1e22a390bb4afe8a8c86db02702b16';

@Injectable()
export class ConvertedService {

  async convertedAmount(to: string, from: string, amount: number) {

    const config = {
      url: 'https://openexchangerates.org/api/latest.json',
      method: "get",
      params: {
          'app_id': appId
      },
      headers: {
          "Content-Type": "application/json"
      }
    };

    console.log("Invocando API: ", config);

    const rate = await axios(config).then((response: any) => {

      return {
        to: response.data.rates[to.toUpperCase()],
        from: response.data.rates[from.toUpperCase()]
      }

    });

    if (from == "USD") {
      return amount * rate.to;
    }

    // Convert from to USD
    const fromUSD = amount / rate.to;

    // Now, converto fromUSD -> to
    return fromUSD * rate.from;

  }

}
