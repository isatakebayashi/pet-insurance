import { InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator'

@InputType()
export class CreateUserInput {
  @IsString()
  @IsNotEmpty({ message: 'cant be blank' })
  name: string;

  @IsEmail()
  @IsNotEmpty({ message: 'cant be blank' })
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}