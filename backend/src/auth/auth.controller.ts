import { Controller, Get, UseGuards, Req, Res, Session } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FortyTwoAuthGuard } from './42-auth.guard';

@Controller('auth')
export class AuthController {

	constructor(private configService: ConfigService) {}

	@Get('redirect')
	@UseGuards(FortyTwoAuthGuard)
	handleRedirect(@Req() req, @Res() res, @Session() session) {
		const user = req.user;
		session.user = user;
		res.redirect('/api/profile');
	}
}
