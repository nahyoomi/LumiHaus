import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Checkout from "../pages/Checkout";

const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
    )
};
export default RoutesMain;