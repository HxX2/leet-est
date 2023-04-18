import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { SessionSerializer } from './auth.serialize';

@Module({
	imports: [PassportModule.register({
		session: true,
	})],
	controllers: [AuthController],
	providers: [SessionSerializer],
})
export class AuthModule { }
