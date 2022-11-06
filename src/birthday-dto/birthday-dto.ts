import { IsDate} from "class-validator";

export class BirthdayDto {
    @IsDate()
    birthdate: Date;
}
