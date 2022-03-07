import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import * as catalogAction from './actions';
import * as catalogActionTypes from './actions/actionTypes';
import { CatalogResponse } from './types';
import CatalogApi from './CatalogApi';

function* loadCatalogSaga() {
  try {
    const { data }: AxiosResponse<CatalogResponse> = yield call(CatalogApi.get);
    yield put(catalogAction.loadCatalogSuccess(data));
  } catch ({ message }) {
    yield put(catalogAction.catalogError(String(message)));
  }
}

export function* catalogSaga() {
  yield takeEvery(catalogActionTypes.LOAD_CATALOG_START, loadCatalogSaga);
}
