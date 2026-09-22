import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import ProductCategory from "./pages/ProductCategory";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
