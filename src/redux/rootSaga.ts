import { all } from 'redux-saga/effects';
import { catalogSaga } from '../pages/Catalog/sagas';

export function* rootSaga() {
  yield all([catalogSaga()]);
}
