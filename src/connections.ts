import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const dbConnection: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'nest',
  password: 'app',
  database: 'sendmeapp_db',
  entities: [`${__dirname}/**/*.entity{.ts,.js}`],
  synchronize: true,
};
