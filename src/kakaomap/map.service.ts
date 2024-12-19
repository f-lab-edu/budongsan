import { Injectable, Inject } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class KakaoMapService {
  constructor() {}

  async searchAddress(inputQuery: string) {
    const url = `https://dapi.kakao.com/v2/local/search/keyword`;
    const response = await axios.get(url, {
      headers: {
        Authorization: `KakaoAK ` + process.env.REST_API_KEY
      },
      params: {
        query: inputQuery
      }
    });
    return response.data.documents;
  }
}
