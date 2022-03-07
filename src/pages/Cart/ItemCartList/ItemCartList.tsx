import React from 'react';
import s from './ItemCartList.module.css';
import { CartRawData } from '../types';

interface ItemPropsType {
  cartItems: CartRawData[];
  onRemoveItem: (id: CartRawData['id']) => void;
}

export const ItemCartList = ({ cartItems, onRemoveItem }: ItemPropsType) => {
  const items = cartItems.map((i) => {
    return (
      <div className={s.table__tr} key={i.id}>
        <div className={s.table__td}>
          <span>{i.name}</span>
        </div>
        <div className={s.table__td}>
          <span>{i.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ₽'}</span>
        </div>
        <div
          className={s.table__td + ' ' + s.table__td_removeBtnBlock}
          onClick={() => onRemoveItem(i.id)}
        >
          <button>Убрать</button>
        </div>
      </div>
    );
  });

  return <>{items}</>;
};
