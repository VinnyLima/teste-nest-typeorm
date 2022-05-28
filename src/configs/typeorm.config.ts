import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: '192.168.0.105',
  port: 5432,
  username: 'postgres',
  password: 'P@ssw0rd',
  database: 'GB_API',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
