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
		const fulluser = profile._json;

		const projects = fulluser.projects_users
		const images = fulluser.image
		const profileUrl = "https://profile.intra.42.fr/users/" + username 
		const user = {
			id,
			username,
			displayName,
			profileUrl,
			projects,
			images,
			accessToken,
			refreshToken,
		};
		console.log(user.accessToken);
		done(null, user);
	}
}
