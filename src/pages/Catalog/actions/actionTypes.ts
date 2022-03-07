import { CatalogResponse } from '../types';

const actionType = 'catalogActionTypes';

export const LOAD_CATALOG_START = `${actionType}/LOAD_CATALOG_START`;
export interface loadCatalogStartAction {
  type: typeof LOAD_CATALOG_START;
}

export const LOAD_CATALOG_SUCCESS = `${actionType}/LOAD_CATALOG_SUCCESS`;
export interface loadCatalogSuccessAction {
  type: typeof LOAD_CATALOG_SUCCESS;
  listItems: CatalogResponse;
}

export const CATALOG_ERROR = `${actionType}/CATALOG_ERROR`;
export interface catalogErrorAction {
  type: typeof CATALOG_ERROR;
  error: Error | string;
}

export type CatalogAction = loadCatalogStartAction & loadCatalogSuccessAction & catalogErrorAction;
