import { CatalogState } from './types';
import * as catalogActionTypes from './actions/actionTypes';

const initialState: CatalogState = {
  loading: false,
  error: '',
  listItems: {
    items: [],
  },
};

export const catalogReducer = (
  state: CatalogState = initialState,
  action: catalogActionTypes.CatalogAction
): CatalogState => {
  switch (action.type) {
    case catalogActionTypes.LOAD_CATALOG_START:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case catalogActionTypes.LOAD_CATALOG_SUCCESS: {
      return {
        ...state,
        loading: false,
        listItems: action.listItems,
      };
    }
    case catalogActionTypes.CATALOG_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    default:
      return state;
  }
};
