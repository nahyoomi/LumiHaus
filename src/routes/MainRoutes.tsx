import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Checkout from "../pages/Checkout";
import PrivateRoutes from "./PrivateRoutes";
import Admin from "../pages/Admin";

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
            <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
    )
};
export default RoutesMain;