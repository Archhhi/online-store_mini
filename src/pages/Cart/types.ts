import { CatalogRawData } from '../Catalog/types';

export type CartRawData = CatalogRawData;

export type CartResponse = CartRawData[];

export interface CartState {
  listItems: CartResponse;
}
