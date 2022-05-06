import { Module } from '@nestjs/common';
import {V1Module} from './V1/infra/v1.module';

@Module({
	imports: [
		V1Module,
	],
  controllers: [],
  providers: [],
})
export class AppModule {}
