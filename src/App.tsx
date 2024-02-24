import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import ShopDashboard from './Pages/ShopDashboard'; // Assuming you have defined these components
import ProductDashboard from './Pages/ProductDashboard'; // Adjust the paths accordingly
import NotFound from './Pages/NotFound'; // Adjust the path accordingly

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/ShopDashboard" replace />} />
          <Route path="/ShopDashboard" element={<ShopDashboard />} />
          <Route path="/ProductDashboard" element={<ProductDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;