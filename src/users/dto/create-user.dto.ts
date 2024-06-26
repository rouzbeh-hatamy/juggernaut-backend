import {
  IsEmail,
  IsPhoneNumber,
  IsString,
  Length,
  Matches,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(2, 40)
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsPhoneNumber('IR')
  readonly phone: string;

  @IsString()
  @Length(4, 20)
  // Passwords will contain at least 1 upper case letter
  // Passwords will contain at least 1 lower case letter
  // Passwords will contain at least 1 number or special character
  // There is no length validation (min, max) in this regex!
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password is weak',
  })
  readonly password: string;
}
