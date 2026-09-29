import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/Login";
import AddProduct from "./pages/products/AddProduct";
import ProductList from "./pages/products/ProductList";
import CategoryList from "./pages/category/CategoryList";
import AddCategory from "./pages/category/AddCategory";
import ForgotPassword from "./pages/ForgotPassword";
import ChangePassword from "./pages/ChangePassword";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/change-password",
    element: <ChangePassword />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      // Dashboard
      // { index: true, element: <Navigate to="/dashboard" /> },
      { path: "/dashboard", element: <Dashboard /> },

      // Product module
      { path: "product", element: <ProductList /> },
      { path: "product/add-product", element: <AddProduct /> },

      // Category module
      { path: "category", element: <CategoryList /> },
      { path: "category/add-category", element: <AddCategory /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
