import { CartState } from './types';
import * as cartActionTypes from './actions/actionTypes';

const initialState: CartState = {
  listItems: JSON.parse(localStorage.getItem('items') || '[]'),
};

export const cartReducer = (
  state: CartState = initialState,
  action: cartActionTypes.CartAction
): CartState => {
  switch (action.type) {
    case cartActionTypes.ADD_ITEM_TO_CART:
      localStorage.setItem('items', JSON.stringify([...state.listItems, action.payload]));
      return {
        ...state,
        listItems: [...state.listItems, action.payload],
      };
    case cartActionTypes.REMOVE_ITEM:
      localStorage.setItem(
        'items',
        JSON.stringify(state.listItems.filter((item) => item.id !== action.id))
      );
      return {
        ...state,
        listItems: state.listItems.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
};
