import React, { useEffect, useState } from 'react';
import api from '../api';
import { useCart } from '../contexts/CartContext';
import ProductPreviewPopup from '../components/ProductPreviewPopup';


const Products = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    api.get('/products').then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="page">
      <h2>All Products</h2>
      <div className="product-grid">
        {products.map((p) => (
          <div className="product-card" key={p.id}>
            <img src={p.image} alt={p.title} onClick={() => setPreview(p)} />
            <h4>{p.title}</h4>
            <p>₹ {p.price}</p>
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <ProductPreviewPopup product={preview} onClose={() => setPreview(null)} />
    </div>
  );
};

export default Products;
