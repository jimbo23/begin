import { Navigate, createBrowserRouter } from 'react-router-dom';
import { MainLayout, ProductsLayout } from '../layouts';
import {
  ProductList,
  ProductSearchResult,
  ProductDetails,
} from '../features/products';

export const router = createBrowserRouter([
  { path: '/', element: <Navigate to="/products" /> },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        element: <ProductsLayout />,
        path: '/products',
        children: [
          {
            path: '/products',
            element: <ProductList />,
          },
          {
            path: '/products/category/:category',
            element: <ProductList />,
          },
          {
            path: '/products/search',
            element: <ProductSearchResult />,
          },
        ],
      },
      { path: '/products/:productId', element: <ProductDetails /> },
    ],
  },
]);
