import type { Product } from '../types/Product';
import CartButton from './CartButton';
import './ProductCard.css';

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { 
    imageUrl, title, price, oldPrice, rating, 
    reviewsCount, colors, badges 
  } = product;

  return (
    <div className="product-card">
      <div className="product-actions">
        <button className="action-btn scale-btn" aria-label="Порівняти">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
             <path d="M12 4v16m-8-8h16"/>
          </svg>
        </button>
        <button className="action-btn heart-btn" aria-label="В обране">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
             <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>

      <div className="product-image-wrap">
        <img src={imageUrl} alt={title} className="product-image" />
      </div>

      <div className="product-colors">
        {colors.map((color, index) => (
          <span 
            key={index} 
            className="color-swatch" 
            style={{ backgroundColor: color }}
          ></span>
        ))}
      </div>

      <h3 className="product-title">{title}</h3>

      <div className="product-badges">
        {badges.map((badge, idx) => (
          <span key={idx} className={`badge badge-${idx}`}>{badge}</span>
        ))}
      </div>

      <div className="product-rating">
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg key={star} width="14" height="14" viewBox="0 0 24 24" fill={star <= rating ? "#ffa900" : "#e9e9e9"} xmlns="http://www.w3.org/2000/svg">
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>
          ))}
        </div>
        <span className="reviews-bubble">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a6a5a5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          <span style={{ marginLeft: '4px' }}>{reviewsCount}</span>
        </span>
      </div>

      <div className="product-footer">
        <div className="product-price-section">
          {oldPrice && <div className="old-price">{oldPrice} ₴</div>}
          <div className={`current-price ${oldPrice ? 'discounted' : ''}`}>{price} ₴</div>
        </div>
        <CartButton onClick={() => console.log('Added to cart:', product.id)} />
      </div>
    </div>
  );
};

export default ProductCard;
