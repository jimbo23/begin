import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { httpClient } from '../../../api/http-client';
import { ProductListResponse } from '../types';

export const useGetProductList = () => {
  const { category } = useParams<'category'>();

  return useQuery<ProductListResponse>({
    queryKey: ['product-list', category],
    queryFn: () => {
      if (!category) return httpClient.get('/products');
      return httpClient.get(`/products/category/${category}`);
    },
  });
};
