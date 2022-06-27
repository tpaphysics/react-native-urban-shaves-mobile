import { IsString, Length, IsEmail } from 'class-validator';

export class LoginDto {
  @IsEmail()
  @IsString()
  email!: string;

  @IsString()
  @Length(6, 15)
  password!: string;
}
