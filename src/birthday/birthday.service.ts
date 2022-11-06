import { Injectable } from '@nestjs/common';
//import { BirthdayDto } from '../birthday-dto/birthday-dto';
import  Moment from 'moment';


@Injectable()
export class BirthdayService {
   // constructor(private birthdate: BirthdayDto){}

    async calculateDays(birthdate: Date) {
       const actualDay = Moment().format('YYYY-MM-DD');
       
        const isFormatValid = Moment(birthdate, 'YYYY-MM-DD', true).isValid();
        //const isFormatValid = Moment(birthdate, 'YYYY-MM-DD').isValid();
        console.log("Formato esperado YYYY-MM-DD, Valor ingresado: 2023-01-04, Resultado: "+ isFormatValid);

        //EJEMPLO DE FORMATO INVALIDO
        /*
        const isFormatValid = moment("2023/01/04", 'YYYY-MM-DD', true).isValid();
        console.log("Formato esperado YYYY-MM-DD, Valor ingresado: 2023/01/04, Resultado: "+ isFormatValid);
        */

        const daysLeftForBirthday = Moment(birthdate).diff(Moment(), "days");
        const hoursLeftForBirthday = Moment(birthdate).diff(Moment(), "hours");
        
        if(daysLeftForBirthday < 0){
            console.log("Error, la fecha ingresada de cumpleaños debe ser mayor a la fecha actual");
        }else{
            console.log("Dias restantes para el cumpleaños: " + daysLeftForBirthday);
            console.log("Horas restantes para el cumpleaños: " + hoursLeftForBirthday);
        }
        return daysLeftForBirthday +". "+ hoursLeftForBirthday;
    }
}
