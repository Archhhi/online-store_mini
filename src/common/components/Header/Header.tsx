import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import s from './Header.module.css';
import cartIcon from '../../../assets/image/cart.png';
import { CATALOG_ROUTE, CART_ROUTE } from '../../../router/routes';
import { useSelector } from 'react-redux';
import { getCartItems } from '../../../pages/Cart/selectors';

export const Header: React.FC = () => {
  const history = useHistory<History>();
  const cartItems = useSelector(getCartItems);

  const countItemsInCart = cartItems.length;

  return (
    <header className={s.header}>
      <NavLink className={s.header__logo} to={CATALOG_ROUTE}>
        <span>DGTL</span>
      </NavLink>
      <div className={s.header__navbar}>
        <ul>
          {history.location.pathname === CART_ROUTE && (
            <NavLink to={CATALOG_ROUTE}>
              <li className={s.header__btnToCatalog}>
                <span>Каталог</span>
              </li>
            </NavLink>
          )}
          {(history.location.pathname === CATALOG_ROUTE || history.location.pathname === '/') && (
            <NavLink to={CART_ROUTE}>
              <li className={s.header__btnToCart}>
                <span className={s.header__countItemInCart}>{countItemsInCart}</span>
                <img src={cartIcon} alt={'Корзина'} />
                <span>Корзина</span>
              </li>
            </NavLink>
          )}
        </ul>
      </div>
    </header>
  );
};
