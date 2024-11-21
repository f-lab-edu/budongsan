import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
   imports: [
   ConfigModule.forRoot({
    envFilePath: [
      (process.env.NODE_ENV === 'production') ? '.production.env'
       : (process.env.NODE_ENV === 'stage') ? '.stage.env' : '.development.env'
    ],
    isGlobal: true,
  }),
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'conn_test',
      entities: [__dirname + `/**/*.entity{.ts,.js}`],
      synchronize: false
    }),
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService, ],
})
export class AppModule {}
