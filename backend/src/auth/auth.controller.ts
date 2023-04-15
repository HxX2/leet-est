import { Controller, Get, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FortyTwoAuthGuard } from './42-auth.guard';

@Controller('auth')
export class AuthController {

	constructor(private configService: ConfigService) {}

	@Get('login')
	@UseGuards(FortyTwoAuthGuard)
	handleLogin() {
		return {msg: 'forty two login '};
	}

	@Get('redirect')
	@UseGuards(FortyTwoAuthGuard)
	handleRedirect() {
		return {msg: 'forty two redirect'};
	}
}
