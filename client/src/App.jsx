import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import ProductCategory from "./pages/ProductCategory";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import ChangePassword from "./pages/ChangePassword";
import ForgotPassword from "./pages/ForgotPassword";
import Checkout from "./pages/Checkout";
import { createContext } from "react";
import { MyContext } from "./context/Mycontext";

// export const MyContext = createContext();

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const values = {
    isLogin,
    setIsLogin,
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path={"/"} exact={true} element={<Home />} />
          <Route
            path={"/product-category"}
            exact={true}
            element={<ProductCategory />}
          />
          <Route path={"/product/:slug"} exact={true} element={<Product />} />
          <Route path={"/login"} exact={true} element={<Login />} />
          <Route path={"/register"} exact={true} element={<Register />} />
          <Route path={"/cart"} exact={true} element={<Cart />} />
          <Route path={"/checkout"} exact={true} element={<Checkout />} />
          <Route
            path={"/change-password"}
            exact={true}
            element={<ChangePassword />}
          />
          <Route
            path={"/forgot-password"}
            exact={true}
            element={<ForgotPassword />}
          />
        </Routes>
        <Footer />
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
