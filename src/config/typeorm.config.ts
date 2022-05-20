/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();

import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const { DATABASE_HOST, DATABASE_PORT, DATABASE_USER, DATABASE_PASSWORD } =
  process.env;

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: DATABASE_HOST,
  port: parseInt(DATABASE_PORT),
  username: DATABASE_USER,
  password: DATABASE_PASSWORD,
  database: 'taskmanagement',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  autoLoadEntities: true,
  synchronize: true,
};
