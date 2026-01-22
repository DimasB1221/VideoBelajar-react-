import { Suspense, lazy } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

// Lazy load components
const HomePage = lazy(() => import("./homepage/page"));
const LoginPage = lazy(() => import("./login/page"));
const RegisterPage = lazy(() => import("./register/page"));
// const ProductPage = lazy(() => import("./products/page"));
const DashboardPage = lazy(() => import("./admin/dashboard/page"));
const ManajemenProductsPage = lazy(
  () => import("./admin/manajemen-products/page"),
);

function App() {
  return (
    <Suspense
      fallback={<div className="flex-center h-screen w-full ">Loading...</div>}
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* <Route path="/products" element={<ProductPage />} /> */}
        <Route path="/admin/dashboard" element={<DashboardPage />} />
        <Route path="/admin/products" element={<ManajemenProductsPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
