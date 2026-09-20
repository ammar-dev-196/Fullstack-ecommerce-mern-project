import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import ProductCategory from "./pages/ProductCategory";
import Product from "./pages/Product";

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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
