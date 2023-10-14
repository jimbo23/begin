import { useGetProductDetails } from '../hooks/use-get-product-details';

export const ProductDetails = () => {
  const { data } = useGetProductDetails();

  if (!data) return null;

  return (
    <div className="flex w-full gap-4 bg-stone-100 max-w-7xl mx-auto">
      <div className="flex-1 flex items-center flex-row gap-6 rounded-xl ">
        <div className="sticky top-20 flex w-[130px] flex-col gap-2 self-start items-center">
          {data?.images.map((image) => (
            <img
              key={image}
              src={image}
              className="w-[100px] cursor-pointer rounded-lg shadow-sm shadow-stone-800"
            />
          ))}
        </div>
        <div className="flex flex-col gap-4 relative">
          {data?.images.map((image) => (
            <img
              key={image}
              src={image}
              className="w-full max-h-[60vh] rounded-lg self-start border-dashed border-[4px] border-stone-800"
            />
          ))}
        </div>
      </div>
      <div className="flex flex-[0.5] flex-col mx-10 gap-10 sticky top-20 self-start py-4">
        <div>
          <h1 className="text-2xl font-bold uppercase text-center my-4">
            {data?.title}
          </h1>
          <p className="uppercase font-semibold text-slate-700 text-xl text-center my-2">
            {data?.brand}
          </p>
          <p className="capitalize font-semibold text-center my-2">
            {data?.category}
          </p>
          <p className="capitalize font-semibold text-3xl text-center">
            $ {data?.price}
          </p>
          <p className="text-center my-2">Rating: {data?.rating} / 5.0</p>
        </div>
        <div className="flex flex-col gap-6">
          <button className="self-center w-[300px] py-4 rounded-sm text-xl font-semibold text-stone-50 bg-stone-900 hover:bg-stone-600 transition">
            ADD TO CART
          </button>
          <button className="self-center w-[300px] py-4 rounded-sm text-xl font-semibold bg-stone-300  hover:bg-stone-200 transition">
            ADD TO WISHLIST
          </button>
        </div>
      </div>
    </div>
  );
};
