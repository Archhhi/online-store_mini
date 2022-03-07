import { RootStateType } from '../../redux/rootReducer';
import { CatalogResponse } from './types';

export const getCatalog = ({ catalog: { listItems } }: RootStateType): CatalogResponse => listItems;
export const getCatalogLoading = ({ catalog: { loading } }: RootStateType) => loading;
