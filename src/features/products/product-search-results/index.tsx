import { BackButton } from '../../../components/back-button';
import { ProductItem } from '../components/product-item';
import { useSearchProducts } from '../hooks/use-search-products';
import { useSearchParams } from 'react-router-dom';

export const ProductSearchResult = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const { data, isLoading } = useSearchProducts(query as string);

  if (data?.total === 0)
    return (
      <>
        <BackButton />
        <h1 className="font-semibold text-2xl mb-4">Product not found!</h1>
      </>
    );

  return (
    <>
      <BackButton />
      <h1 className="font-semibold text-lg mb-4">
        Search Results for {query}:
      </h1>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-8 mx-auto">
        {isLoading
          ? new Array(5)
              .fill(0)
              .map((_, idx) => <ProductItem.Skeleton key={idx} />)
          : data?.products.map((product) => (
              <ProductItem product={product} key={product.id} />
            ))}
      </ul>
    </>
  );
};
