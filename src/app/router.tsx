import { Routes, Route } from 'react-router-dom';
import App from './App';
import { LoginPage } from '@/pages/LoginPage/LoginPage';
import { ProductPage } from '@/pages/ProductPage/ProductPage';
import { ProtectedRoute } from './ProtectedRoute';

export function AppRouter() {
  return (
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
  );
}
