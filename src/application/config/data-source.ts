import 'reflect-metadata'

import { DataSource } from 'typeorm'

import { entities } from '../entities'
import { env } from './env'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: env.POSTGRES_DATABASE_HOST,
  port: env.POSTGRES_DATABASE_PORT,
  username: env.POSTGRES_DATABASE_USER,
  password: env.POSTGRES_DATABASE_PASSWORD,
  database: env.POSTGRES_DATABASE_NAME,
  synchronize: true,
  logging: true,
  entities: [...entities],
  migrations: [],
  subscribers: [],
})
