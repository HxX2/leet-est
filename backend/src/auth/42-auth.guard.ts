import { AuthGuard } from "@nestjs/passport";
import { Injectable, ExecutionContext, CanActivate } from "@nestjs/common";

@Injectable()
export class FortyTwoAuthGuard extends AuthGuard('42') {
	async canActivate(context: ExecutionContext) {
		const result = (await super.canActivate(context)) as boolean;
		const request = context.switchToHttp().getRequest();
		await super.logIn(request);
		return result;
	}
}

@Injectable()
export class AuthenticatedGuard implements CanActivate {
	async canActivate(context: ExecutionContext) {
		const request = context.switchToHttp().getRequest();
		return request.isAuthenticated();
	}
}