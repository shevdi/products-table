import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { LoadingFallback } from './LoadingFallback';
import { MainPage } from '@/pages';

const LoginPage = lazy(() => import('@/pages').then((m) => ({ default: m.LoginPage })));
const ProductPage = lazy(() => import('@/pages').then((m) => ({ default: m.ProductPage })));

export function AppRouter() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<MainPage />} />
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
