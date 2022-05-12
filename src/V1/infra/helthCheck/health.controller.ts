import {Controller, Get} from "@nestjs/common";
import {HealthCheck, HealthCheckService, HttpHealthIndicator, TypeOrmHealthIndicator} from "@nestjs/terminus";

@Controller('health')
export class HealthController {
	constructor(
		private health : HealthCheckService,
		private http : HttpHealthIndicator, 
		private db : TypeOrmHealthIndicator, 
	) {}

	@Get('api_nestj')
	@HealthCheck()
	checkRequestAPI() {
		return this.health.check([
			() => this.http.pingCheck('nestjs-docs', 'https://docs.nestjs.com'), 
		])
	}

	@Get('database_on')
	@HealthCheck()
	checkDatabaseOn() {
		return this.health.check([
			() => this.db.pingCheck('database'),
		])
	}
}
