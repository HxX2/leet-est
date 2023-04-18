import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-42";
import { ConfigService } from "@nestjs/config";
import { Injectable } from '@nestjs/common';

@Injectable()
export class FortyTwoStrategy extends PassportStrategy(Strategy, '42') {
	constructor(private configService: ConfigService) {
		super({
			clientID: configService.get('FORTYTWO_CLIENT_ID'),
			clientSecret: configService.get('FORTYTWO_CLIENT_SECRET'),
			callbackURL: configService.get('FORTYTWO_CALLBACK_URL'),
			scope: 'public',
		});
	}

	async validate(accessToken: string, refreshToken: string, profile: any, done: any) {
		const { id, username, displayName } = profile;
		const user = {
			id,
			username,
			displayName,
			accessToken,
			refreshToken,
		};
		console.log(user);
		done(null, user);
	}
}
