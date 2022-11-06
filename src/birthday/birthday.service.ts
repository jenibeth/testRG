import { Injectable } from '@nestjs/common';
const moment= require ('moment');

@Injectable()
export class BirthdayService {
   async calculateDays(birthdate: Date) {

        const actualDay = moment().format('YYYY-MM-DD');

        let birthday=moment(birthdate).format('YYYY-MM-DD');
       
   
        let monthBirth=moment(birthday).format('MM');
        let dayBirth=moment(birthday).format('DD');
 
        let yearNow=moment(actualDay).format('YYYY');
        let monthNow=moment(actualDay).format('MM');
        let dayNow=moment(actualDay).format('DD');

        let year=yearNow;
        let nextBirthday="";
        //validar sin se compara con el 2023 o 2022
        if (monthBirth<monthNow){
            year= moment(yearNow).add(1, 'years').format('YYYY'); 
          
         }else if(monthBirth==monthNow){
             if(dayBirth<=dayNow){
                 year= moment(yearNow).add(1, 'years').format('YYYY');                 
             }     
         }

         nextBirthday=(`${year}-${monthBirth}-${dayBirth}`);
         return  (moment(nextBirthday).diff(moment(), "days"))+1;  
       
    }
}

