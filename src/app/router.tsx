import { Routes, Route } from 'react-router-dom';
import App from './App';
import { LoginPage } from '@/pages/LoginPage/LoginPage';
import { ProductPage } from '@/pages/ProductPage/ProductPage';

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/products" element={<ProductPage />} />
    </Routes>
  );
}
