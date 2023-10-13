import { Navigate, createBrowserRouter } from 'react-router-dom';
import { MainLayout, ProductsLayout } from './layout';
import { ProductList } from '../features/products/components/product-list';
import { ProductDetails } from '../features/product-details';

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
        ],
      },
      { path: '/products/:productId', element: <ProductDetails /> },
    ],
  },
]);
