import { Controller, Get, Session, HttpException, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('profile')
  async profile(@Session() session) {
	if (!session.user) {
		throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
	}
	const user = session.user;
    return { user };
  }
}
