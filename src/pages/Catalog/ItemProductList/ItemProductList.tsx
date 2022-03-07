import React from 'react';
import s from './ItemProductList.module.css';
import { NavLink } from 'react-router-dom';
import { CART_ROUTE } from '../../../router/routes';
import { CatalogRawData } from '../types';
import { CartRawData } from '../../Cart/types';

interface ItemPropsType {
  listItems: CatalogRawData[];
  cartItems: CartRawData[];
  onAddItemToCart: (item: CatalogRawData) => void;
}

export const ItemProductList = ({ listItems, cartItems, onAddItemToCart }: ItemPropsType) => {
  const items = listItems.map((i) => {
    return (
      <div key={i.id} className={s.content__item}>
        <div className={s.content__itemImageBlock}>
          <img src={i.image} alt={'изображение товара'} className={s.content__itemImage} />
        </div>
        <div className={s.content__descriptionBlock}>
          <div>
            <span>{i.name}</span>
          </div>
          <div className={s.content__actionBlock}>
            <span>{i.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ₽'}</span>
            {!cartItems.some((el) => el.id === i.id) ? (
              <button onClick={() => onAddItemToCart(i)}>Добавить в корзину</button>
            ) : (
              <NavLink to={CART_ROUTE}>
                <button>Оформить заказ</button>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    );
  });

  return <>{items}</>;
};
