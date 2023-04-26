import { Controller, Get, Req, Res, Session, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthenticatedGuard } from "./auth/42-auth.guard";
import { projects } from './data/static';


@Controller()
export class AppController {
	constructor(private readonly appService: AppService) { }

	@Get()
	getHello(): string {
		return this.appService.getHello();
	}

	@Get('profile')
	@UseGuards(AuthenticatedGuard)
	async profile(@Res({ passthrough: true }) res, @Req() req) {
		return { user : req.user };
	}

	@Get('projects')
	@UseGuards(AuthenticatedGuard)
	async projects(@Session() session) {
		const userProjects = session.user.projects;
		const finishedProjects = userProjects.filter( project => !project.project.slug.includes('exam') && !project.project.slug.includes('c-piscine') && project.status == 'finished')
		const unfinishedProjects = projects.filter(project => { return !finishedProjects.some((fproject) => { return fproject.project.id == project.id})})
		
		return { unfinishedProjects };
	}
}
