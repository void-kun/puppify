import 'reflect-metadata';
import path from 'path';
import { DataSource } from 'typeorm';

import config from './index';
import * as entities from '../entities';

const postgresConfig = {
  host: config.DB_HOST,
  port: config.DB_PORT,
  username: config.DB_USERNAME,
  password: config.DB_PASSWORD,
  database: config.DB_DATABASE,
};

export const AppDataSource = new DataSource({
  ...postgresConfig,
  type: 'postgres',
  synchronize: false,
  logging: true,
  entities: entities,
  migrations: [path.join(__dirname, '**', '*{.ts,.js}')],
  subscribers: [path.join(__dirname, '**', '*{.ts,.js}')],
});
