import { Module } from '@nestjs/common';
import {V1Module} from './V1/v1.module';

@Module({
	imports: [
		V1Module,
	],
  controllers: [],
  providers: [],
})
export class AppModule {}
