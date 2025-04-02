import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';
import ormconfig from '../ormconfig'; // Import TypeORM config

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Initialize TypeORM connection
  const dataSource = new DataSource(ormconfig);
  await dataSource.initialize();

  // Run migrations to ensure the schema exists
  await dataSource.runMigrations();

  await app.listen(8000);
}
bootstrap();
