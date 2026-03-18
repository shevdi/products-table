import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { LoadingFallback } from './LoadingFallback';
import App from './App';

const LoginPage = lazy(() =>
  import('@/pages/LoginPage/LoginPage').then((m) => ({ default: m.LoginPage }))
);
const ProductPage = lazy(() =>
  import('@/pages/ProductPage/ProductPage').then((m) => ({ default: m.ProductPage }))
);

export function AppRouter() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <App />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <ProductPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Suspense>
  );
}
