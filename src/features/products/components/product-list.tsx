import { Link } from 'react-router-dom';
import { useGetProductList } from '../hooks/use-get-product-list';

export type ProductItemType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type ProductListResponse = {
  products: ProductItemType[];
};

export const ProductList = () => {
  const { data, isLoading } = useGetProductList();

  return (
    <ul className="flex-row flex-wrap gap-y-10 gap-x-8 flex justify-center max-w-7xl mx-auto">
      {isLoading ? (
        <ProductList.Skeleton />
      ) : (
        data?.products.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <li className="bg-stone-50 p-2 w-[320px] rounded-lg border-dashed border-[3.5px] border-stone-800">
              <img
                src={product.thumbnail}
                className="w-[300px] h-[200px] rounded-lg"
              />
              <span className="capitalize font-semibold">{product.title}</span>
              <br />
              <span className="capitalize font-medium">{product.brand}</span>
              <br />
              <span>${product.price}</span>
            </li>
          </Link>
        ))
      )}
    </ul>
  );
};

ProductList.Skeleton = () => (
  <>
    {new Array(10).fill(0).map((_, idx) => (
      <li
        key={idx}
        className="bg-slate-200 p-2 rounded-lg w-[323px] h-[290px] border-dashed border-[3.5px] border-stone-800"
      />
    ))}
  </>
);
