import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ormConfig } from 'orm.config';
import { KakaoMapModule } from './kakaomap/map.module';
import { BoardsModule } from './boards/boards.module';
import { ScrapModule } from './scrap/scrap.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        process.env.NODE_ENV === 'production'
          ? '.production.env'
          : process.env.NODE_ENV === 'stage'
            ? '.stage.env'
            : '.development.env'
      ],
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      useFactory: ormConfig
    }),
    UsersModule,
    AuthModule,
    KakaoMapModule,
    BoardsModule,
    ScrapModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
