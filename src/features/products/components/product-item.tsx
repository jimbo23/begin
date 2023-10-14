import { Link } from 'react-router-dom';
import { ProductItemType } from '../types';

export const ProductItem = ({ product }: { product: ProductItemType }) => (
  <Link to={`/products/${product.id}`}>
    <li className="bg-stone-50 p-2 w-[320px] rounded-lg border-dashed border-[3.5px] border-stone-800">
      <img src={product.thumbnail} className="w-[300px] h-[200px] rounded-lg" />
      <span className="capitalize font-semibold">{product.title}</span>
      <br />
      <span className="capitalize font-medium">{product.brand}</span>
      <br />
      <span>${product.price}</span>
    </li>
  </Link>
);

ProductItem.Skeleton = () => (
  <li className="bg-slate-200 p-2 rounded-lg w-[323px] h-[290px] border-dashed border-[3.5px] border-stone-800" />
);
