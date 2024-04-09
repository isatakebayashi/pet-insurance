import { InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator'

@InputType()
export class UpdateUserInput {
  @IsString()
  @IsNotEmpty({ message: 'cant be blank' })
  @IsOptional()
  name?: string;

  @IsEmail()
  @IsNotEmpty({ message: 'cant be blank' })
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  password?: string;
}
