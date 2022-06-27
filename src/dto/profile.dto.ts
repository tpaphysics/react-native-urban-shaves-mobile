import { IsEmail, IsOptional, Length, Validate, ValidateIf } from 'class-validator';

import { CustomMatchPasswords } from '../decorators/custonMatchPasswordEqual';

export class ProfileDto {
  @IsOptional()
  @ValidateIf((field) => field.name !== '')
  @Length(6, 15)
  name?: string;

  @IsOptional()
  @ValidateIf((field) => field.email !== '')
  @IsEmail()
  email?: string;

  @Length(6, 15)
  password!: string;

  @IsOptional()
  @ValidateIf((field) => field.newPassword !== '')
  @Length(6, 15)
  newPassword?: string;

  @IsOptional()
  @ValidateIf((field) => field.newPassword !== '')
  @Length(6, 15)
  @Validate(CustomMatchPasswords, ['newPassword'])
  confirmNewPassword?: string;
}
