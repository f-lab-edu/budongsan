import { Controller, Get, Param } from '@nestjs/common';
import { KakaoMapService } from './map.service';

@Controller('map')
export class KakaoMapController {
  constructor(private readonly kakaoMapService: KakaoMapService) {}

  @Get('/search/:inputQuery')
  async searchMap(@Param('inputQuery') inputQuery: string) {
    return this.kakaoMapService.searchAddress(inputQuery);
  }
}
