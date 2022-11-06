import { IsNumber} from "class-validator";

export class NumberDto {
    @IsNumber()
    first: number;

    @IsNumber()
    second: number;

}
