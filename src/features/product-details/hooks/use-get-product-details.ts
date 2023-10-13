import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { ProductItemType } from '../../products/components/product-list';
import { httpClient } from '../../../api/http-client';

export const useGetProductDetails = () => {
  const { productId } = useParams<'productId'>();

  return useQuery<ProductItemType>({
    queryKey: ['product-details', productId],
    queryFn: () => httpClient.get(`/products/${productId}`),
  });
};
