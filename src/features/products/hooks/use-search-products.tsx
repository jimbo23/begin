import { useQuery } from 'react-query';
import { httpClient } from '../../../api/http-client';
import { ProductItemType } from '../types';

type SearchResponseType = {
  products: ProductItemType[];
  total: number;
  skip: number;
  limit: number;
};

export const useSearchProducts = (query: string) =>
  useQuery<SearchResponseType>({
    queryKey: ['product-search', query],
    queryFn: () => httpClient.get(`/products/search?q=${query}`),
  });
