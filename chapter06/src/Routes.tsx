import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { ProductsPage } from './pages/ProductsPage';
import { ProductPage } from './pages/ProductPage.tsx';
import { ErrorPage } from './pages/ErrorPage.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { lazy, Suspense } from 'react';

const AdminPage =  lazy(() => import('./pages/AdminPage'));

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
      },
      {
        path: 'admin',
        element: (
          <Suspense
            fallback={
              <div className="text-center p-5 text-xl text-slate-00">Loading...</div>
              }
            >
            <AdminPage />
          </Suspense>
        )
      }
    ]
  }
]);

export function Routes() {
  return <RouterProvider router={router} />;
}