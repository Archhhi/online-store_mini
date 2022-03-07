import React, { useEffect } from 'react';
import s from './Catalog.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { loadCatalogStart } from '../actions';
import { getCatalog, getCatalogLoading } from '../selectors';
import { addItemToCart } from '../../Cart/actions';
import { CatalogRawData } from '../types';
import { getCartItems } from '../../Cart/selectors';
import { Preloader } from '../../../common/components/Preloader/Preloader';
import { ItemProductList } from '../ItemProductList/ItemProductList';

export const Catalog: React.FC = () => {
  const dispatch = useDispatch();
  const { items: listItems } = useSelector(getCatalog);
  const cartItems = useSelector(getCartItems);
  const loading = useSelector(getCatalogLoading);

  useEffect(() => {
    !listItems.length && dispatch(loadCatalogStart());
  }, []);

  const onAddItemToCart = ({ id, image, name, price }: CatalogRawData) => {
    const data: CatalogRawData = {
      id,
      image,
      name,
      price,
    };
    dispatch(addItemToCart(data));
  };

  return (
    <>
      <div className={s.content}>
        <h1>Все товары:</h1>

        {loading ? (
          <Preloader />
        ) : (
          <div className={s.content__itemsBlock}>
            <ItemProductList
              listItems={listItems}
              cartItems={cartItems}
              onAddItemToCart={onAddItemToCart}
            />
          </div>
        )}
      </div>
    </>
  );
};
