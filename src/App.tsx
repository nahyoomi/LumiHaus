import "./App.css";
import RoutesMain from "./routes/MainRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <RoutesMain />
    </>
  );
}

export default App;
