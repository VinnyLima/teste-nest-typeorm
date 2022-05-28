import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { UsersModule } from './users/users.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { FiliaisModule } from './filiais/filiais.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UsersModule, UsuariosModule, FiliaisModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
