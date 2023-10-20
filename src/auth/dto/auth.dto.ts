import { IsEmail, IsNotEmpty } from 'class-validator';

export class AuthDto {
	@IsEmail()
	login: string;
	@IsNotEmpty()
	passwordHash: string;
}
