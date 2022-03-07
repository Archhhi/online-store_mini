import * as catalogActionTypes from './actionTypes';
import { CatalogResponse } from '../types';

export const loadCatalogStart = () => ({
  type: catalogActionTypes.LOAD_CATALOG_START,
});

export const loadCatalogSuccess = (
  listItems: CatalogResponse
): catalogActionTypes.loadCatalogSuccessAction => ({
  type: catalogActionTypes.LOAD_CATALOG_SUCCESS,
  listItems,
});

export const catalogError = (error: Error | string): catalogActionTypes.catalogErrorAction => ({
  type: catalogActionTypes.CATALOG_ERROR,
  error,
});
