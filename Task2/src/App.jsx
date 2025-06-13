import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductPage from './pages/ProductPage';
import AdminPanel from './pages/AdminPanel';
import Checkout from './pages/Checkout';
import Navbar from './components/Navbar';
import withAuthProtection from './hoc/withAuthProtection';
import { CartProvider } from './contexts/CartContext';
import CartPage from './pages/CartPage';

function App() {
  const ProtectedAdmin = withAuthProtection(AdminPanel);
  const ProtectedCheckout = withAuthProtection(Checkout);

  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/admin" element={<ProtectedAdmin />} />
          <Route path="/checkout" element={<ProtectedCheckout />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
