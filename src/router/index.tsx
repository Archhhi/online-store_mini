import React from 'react';
import { WithRequired } from '../common/utils';
import { MainLayout } from '../common/layouts/MainLayout/MainLayout';
import { CATALOG_ROUTE, PAGE_404_ROUTE, CART_ROUTE } from './routes';
import { Catalog } from '../pages/Catalog/CatalogPage/Catalog';
import { Cart } from '../pages/Cart/CartPage/Cart';
import { Page_404 } from '../common/pages/Page_404/Page_404';
import { RouteProps } from 'react-router-dom';

export type IRouteProps = WithRequired<RouteProps, 'component'> & {
  title?: string;
  layout: React.FC;
};

export const allRoutes: IRouteProps[] = [
  {
    path: '/',
    component: Catalog,
    exact: true,
    layout: MainLayout,
  },
  {
    path: CATALOG_ROUTE,
    component: Catalog,
    exact: true,
    layout: MainLayout,
  },
  {
    path: CART_ROUTE,
    component: Cart,
    exact: true,
    layout: MainLayout,
  },
  {
    path: PAGE_404_ROUTE,
    exact: true,
    layout: Page_404,
    component: () => <></>,
  },
];
