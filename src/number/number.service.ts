import { Injectable } from '@nestjs/common';

@Injectable()
export class NumberService {
    async getNumber (first: number , second: number){
        let result=0;
        let producto="";
        for (let i=1; i<=second; i++){
            result=first*i;
            producto=producto.concat(result.toString());

        }
        return producto.substring(0, 9);
      
    }
}
