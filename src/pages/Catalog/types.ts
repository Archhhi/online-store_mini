export interface CatalogRawData {
  id: number;
  image: string;
  name: string;
  price: number;
}

export type CatalogResponse = {
  items: CatalogRawData[];
};

export interface CatalogState {
  loading: boolean;
  error: Error | string;
  listItems: CatalogResponse;
}
