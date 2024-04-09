import { IsNotEmpty, Length } from "class-validator";
  
export class CreateUserBody {
  @IsNotEmpty()
  @Length(3, 20)
  name: string

  @IsNotEmpty({
    message: 'Bananas'
  })
  email: string

  password: string
}