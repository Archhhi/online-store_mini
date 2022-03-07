import { AxiosResponse } from 'axios';
import $api from '../../common/api';
import { CatalogResponse } from './types';

export default class CatalogApi {
  static async get(): Promise<AxiosResponse<CatalogResponse>> {
    return $api.get<CatalogResponse>(`/catalog`);
  }
}
