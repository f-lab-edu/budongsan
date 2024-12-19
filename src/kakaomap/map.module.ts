import { Module } from '@nestjs/common';
import { KakaoMapController } from './map.controller';
import { KakaoMapService } from './map.service';

@Module({
  controllers: [KakaoMapController],
  providers: [KakaoMapService]
})
export class KakaoMapModule {}
