import { IsNotEmpty, Length } from "class-validator";
  
export class CreateAccountBody {
  @IsNotEmpty()
  @Length(3, 20)
  name: string
}