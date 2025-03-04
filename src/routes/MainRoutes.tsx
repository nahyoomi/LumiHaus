import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Checkout from "../pages/Checkout";
import PrivateRoutes from "./PrivateRoutes";
import Admin from "../pages/Admin";
import ProductPage from "../pages/ProductPage";
import NotFound from "../pages/NotFound";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route
        path="/admin"
        element={
          <PrivateRoutes>
            <Admin />
          </PrivateRoutes>
        }
      />
      <Route
        path="/admin/products/create"
        element={
          <PrivateRoutes>
            <ProductPage />
          </PrivateRoutes>
        }
      />
      <Route
        path="/admin/products/edit/:productId"
        element={
          <PrivateRoutes>
            <ProductPage />
          </PrivateRoutes>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesMain;
