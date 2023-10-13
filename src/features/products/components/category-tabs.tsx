import { NavLink } from 'react-router-dom';
import { useGetCategories } from '../hooks/use-get-categories';

export const CategoryTabs = () => {
  const { data: categories, isLoading } = useGetCategories();

  return (
    <>
      <header className="uppercase font-black text-lg px-4 underline select-none">
        Category
      </header>
      {isLoading ? (
        <CategoryTabs.Skeleton />
      ) : (
        <>
          <NavLink
            to="/products"
            className={() =>
              `capitalize hover:bg-stone-400 rounded-md mx-2 font-medium italic px-3 py-2 ${
                location.pathname.endsWith('/products') &&
                'bg-stone-500 text-white font-black'
              }`
            }
          >
            All
          </NavLink>
          {categories?.map((c) => (
            <NavLink
              key={c + location.pathname}
              to={`/products/category/${c}`}
              className={({ isActive }) =>
                `capitalize hover:bg-stone-400 rounded-md mx-2 font-medium italic px-3 py-2 ${
                  isActive && 'bg-stone-500 text-white font-black'
                }`
              }
            >
              {c}
            </NavLink>
          ))}
        </>
      )}
    </>
  );
};

CategoryTabs.Skeleton = () => (
  <>
    {new Array(21).fill(0).map((_, idx) => (
      <div key={idx} className="h-[40px] bg-slate-300 mx-2 rounded-md" />
    ))}
  </>
);
