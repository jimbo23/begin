import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SearchInput = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/products/search/?q=${query}`, { replace: false });
    setQuery('');
  };

  return (
    <form
      className="absolute right-4 flex justify-center gap-[2px] group-[]:"
      onSubmit={handleSubmit}
    >
      <input
        type="search"
        className="bg-slate-200 w-[280px] justify-end py-2 px-3 text-lg outline-dashed outline-1 rounded-md rounded-r-none focus-visible:outline-[3px]"
        placeholder="Search for products"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="font-black bg-slate-200 px-2 rounded-lg rounded-l-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="24"
          height="24"
          viewBox="0 0 50 50"
        >
          <path d="M 21 3 C 11.654545 3 4 10.654545 4 20 C 4 29.345455 11.654545 37 21 37 C 24.701287 37 28.127393 35.786719 30.927734 33.755859 L 44.085938 46.914062 L 46.914062 44.085938 L 33.875 31.046875 C 36.43682 28.068316 38 24.210207 38 20 C 38 10.654545 30.345455 3 21 3 z M 21 5 C 29.254545 5 36 11.745455 36 20 C 36 28.254545 29.254545 35 21 35 C 12.745455 35 6 28.254545 6 20 C 6 11.745455 12.745455 5 21 5 z" />
        </svg>
      </button>
    </form>
  );
};
