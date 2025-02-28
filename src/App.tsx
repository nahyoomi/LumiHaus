import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RoutesMain from './routes/RoutesMain';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <RoutesMain />
    </BrowserRouter>
  )
}

export default App
