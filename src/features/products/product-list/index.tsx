import { ProductItem } from '../components/product-item';
import { useGetProductList } from '../hooks/use-get-product-list';

export const ProductList = () => {
  const { data, isLoading } = useGetProductList();

  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-8 mx-auto">
      {isLoading
        ? new Array(10).fill(0).map(() => <ProductItem.Skeleton />)
        : data?.products.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
    </ul>
  );
};
