import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { ProductsPage } from './pages/ProductsPage';
import { ProductPage } from './pages/ProductPage.tsx';
import { ErrorPage } from './pages/ErrorPage.tsx';
import { HomePage } from './pages/HomePage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: 'products',
        element: <ProductsPage />,
      },
      {
        path: 'products/:id',
        element: <ProductPage />,
      }
    ]
  }
]);

export function Routes() {
  return <RouterProvider router={router} />;
}