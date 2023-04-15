import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { FortyTwoStrategy } from './auth/42.strategy';

@Module({
	controllers: [AppController],
	providers: [AppService, FortyTwoStrategy],
	imports: [
		AuthModule,
		ConfigModule.forRoot({
			isGlobal: true,
		})
	],
})
export class AppModule { }
