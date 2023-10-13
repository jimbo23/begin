import { useQuery } from 'react-query';
import { httpClient } from '../../../api/http-client';

export const useGetCategories = () =>
  useQuery<string[]>({
    queryKey: ['categories'],
    queryFn: () => httpClient.get('/products/categories'),
    refetchOnMount: false,
  });
