import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { httpClient } from '../../../api/http-client';
import { ProductItemType } from '../types';

export const useGetProductDetails = () => {
  const { productId } = useParams<'productId'>();

  return useQuery<ProductItemType>({
    queryKey: ['product-details', productId],
    queryFn: () => httpClient.get(`/products/${productId}`),
  });
};
