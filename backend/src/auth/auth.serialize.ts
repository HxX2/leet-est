import { PassportSerializer } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  serializeUser(user: any, done: (err: Error, user: any) => void): any {
    const serializedUser = { 
		id: user.id,
		username: user.username,
		displayName: user.displayName,
		profileUrl: user.profileUrl 
	};
    done(null, serializedUser);
  }

  deserializeUser(payload: any, done: (err: Error, payload: string) => void): any {
    done(null, payload);
  }
}