import * as cartActionTypes from './actionTypes';
import { CartRawData } from '../types';

export const addItemToCart = (payload: CartRawData): cartActionTypes.addItemToCartAction => ({
  type: cartActionTypes.ADD_ITEM_TO_CART,
  payload,
});

export const removeCartItem = (id: CartRawData['id']): cartActionTypes.removeCartItemAction => ({
  type: cartActionTypes.REMOVE_ITEM,
  id,
});
