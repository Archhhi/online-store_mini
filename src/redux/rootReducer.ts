import { combineReducers } from 'redux';
import { catalogReducer } from '../pages/Catalog/reducer';
import { cartReducer } from '../pages/Cart/reducer';

export const rootReducer = combineReducers({
  catalog: catalogReducer,
  cart: cartReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>;
