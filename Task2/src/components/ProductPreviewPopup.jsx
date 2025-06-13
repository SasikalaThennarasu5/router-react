import PortalWrapper from '../portals/PortalWrapper';
import './ProductPreviewPopup.css';

const ProductPreviewPopup = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <PortalWrapper elementId="preview-root">
      <div className="preview-overlay" onClick={onClose}>
        <div className="preview-box" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={onClose}>×</button>
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p><strong>Price:</strong> ₹{product.price}</p>
        </div>
      </div>
    </PortalWrapper>
  );
};

export default ProductPreviewPopup;
