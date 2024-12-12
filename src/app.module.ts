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
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DBNAME,
      entities: [__dirname + `/**/*.entity{.ts,.js}`],
      synchronize: false
    }),
    UsersModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  
}
