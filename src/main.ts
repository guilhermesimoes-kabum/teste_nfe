import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {inCluster} from './V1/infra/lib/InCluster';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

inCluster(bootstrap);
