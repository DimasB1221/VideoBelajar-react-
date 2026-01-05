import { Suspense, lazy } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

// Lazy load components
const HomePage = lazy(() => import("./homepage/page"));
const LoginPage = lazy(() => import("./login/page"));
const RegisterPage = lazy(() => import("./register/page"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-full items-center justify-center">
          Loading...
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
