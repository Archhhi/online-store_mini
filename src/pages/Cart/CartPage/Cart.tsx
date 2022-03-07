import React from 'react';
import s from './Cart.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCartItems } from '../selectors';
import { CatalogRawData } from '../../Catalog/types';
import { removeCartItem } from '../actions';
import { ItemCartList } from '../ItemCartList/ItemCartList';

export const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(getCartItems);

  const totalPrice =
    cartItems
      .reduce((acc, currentValue) => acc + currentValue.price, 0)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ₽';

  const onRemoveItem = (id: CatalogRawData['id']) => {
    dispatch(removeCartItem(id));
  };

  return (
    <div className={s.content}>
      {!cartItems.length ? (
        <h2>Корзина пуста</h2>
      ) : (
        <div className={s.table}>
          <div className={s.table__title}>
            <h2>Товары в корзине:</h2>
          </div>
          <div className={s.table__tr}>
            <div className={s.table__td}>
              <span>Название</span>
            </div>
            <div className={s.table__td}>
              <span>Стоимость</span>
            </div>
          </div>

          <ItemCartList cartItems={cartItems} onRemoveItem={onRemoveItem} />

          <div className={s.table__td}>
            <span>Итого</span>
          </div>
          <div className={s.table__td}>
            <span>{totalPrice}</span>
          </div>
        </div>
      )}
    </div>
  );
};
