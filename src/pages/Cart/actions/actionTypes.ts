import { CartRawData } from '../types';

const actionType = 'orderActionTypes';

export const ADD_ITEM_TO_CART = `${actionType}/ADD_ITEM_TO_CART`;
export interface addItemToCartAction {
  type: typeof ADD_ITEM_TO_CART;
  payload: CartRawData;
}

export const REMOVE_ITEM = `${actionType}/REMOVE_ITEM`;
export interface removeCartItemAction {
  type: typeof REMOVE_ITEM;
  id: CartRawData['id'];
}

export type CartAction = addItemToCartAction & removeCartItemAction;
