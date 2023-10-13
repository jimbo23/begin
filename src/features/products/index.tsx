import { useState } from 'react';
import { ProductList } from './components/product-list';

export const Products = () => {
  const [query, setQuery] = useState('');

  return (
    <div>
      <div className="flex gap-6">
        <input
          type="search"
          className="border-stone-600 p-2 rounded-md bg-stone-500"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="bg-stone-500 p-3 rounded-lg text-stone-100 text-lg">
          Search
        </button>
      </div>
      <ProductList />
    </div>
  );
};
