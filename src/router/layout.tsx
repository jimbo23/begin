import { Link, Outlet } from 'react-router-dom';
import { CategoryTabs } from '../features/products/components/category-tabs';
import { SearchInput } from '../components/search-input';

export const MainLayout = () => (
  <div className="flex flex-col min-h-screen">
    <header className="sticky top-0 z-10 flex h-16 bg-stone-50 w-full justify-center items-center shadow-stone-500 shadow-sm">
      <Link to="/products">
        <h1 className="text-4xl font-extrabold text-stone-800 select-none">
          BEGIN.
        </h1>
      </Link>
      <SearchInput />
    </header>
    <div className="py-8 px-4 bg-stone-100 min-h-[calc(100vh-48px)]">
      <Outlet />
    </div>
  </div>
);

export const ProductsLayout = () => (
  <div className="flex h-full gap-8">
    <aside className="bg-stone-200 flex flex-col gap-2 py-4 w-[250px] rounded-lg border-solid border-[3px] border-stone-900 h-full">
      <CategoryTabs />
    </aside>
    <div className="flex-1">
      <Outlet />
    </div>
  </div>
);
