import { IsEmail, IsOptional, Length, ValidateIf } from 'class-validator';

import { Match } from '../decorators/match.decorator';

export class ProfileDto {
  @IsOptional()
  @ValidateIf((field) => field.name !== '')
  @Length(6, 15)
  name?: string;

  @IsEmail()
  email!: string;

  @Length(6, 15)
  password!: string;

  @Length(6, 15)
  newPassword!: string;

  @Match('newPassword')
  @Length(6, 15)
  confirmNewPassword!: string;
}
