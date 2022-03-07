import { RootStateType } from '../../redux/rootReducer';
import { CartResponse } from './types';

export const getCartItems = ({ cart: { listItems } }: RootStateType): CartResponse => listItems;
