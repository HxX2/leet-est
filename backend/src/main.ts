import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.use(session({
	secret: '6gKd5OG0z0ds0lDhegmq',
	saveUninitialized: false,
	resave: false,
	cookie: {
		maxAge: 6e6,
		httpOnly: true,
	}
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(3000);
}
bootstrap();
