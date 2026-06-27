import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import type { Product } from '../types/Product';
import { useSearch } from '../context/SearchContext';

import watchRedmi from '../assets/watch_redmi.png';
import watchXiaomi from '../assets/watch_xiaomi.png';
import watchApple from '../assets/watch_apple.png';
import blackEarphones from '../assets/earphones_black.png';
import orangeEarphones from '../assets/earphones_orange.png';

const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    imageUrl: watchRedmi, 
    title: "Годинник Redmi Watch 6 Чорний Black BHR08CIGL",
    price: 1875,
    rating: 5,
    reviewsCount: 26,
    colors: ['#000000', '#ff0000', '#0000ff'],
    badges: ['ІННОВАЦІЯ', 'АКЦІЯ']
  },
  {
    id: 2,
    imageUrl: watchXiaomi, 
    title: "Годинник Xiaomi Watch 5 Чорний Black Strap BHR07WRGL",
    price: 12999,
    oldPrice: 15999,
    discountPercentage: 18,
    rating: 4,
    reviewsCount: 22,
    colors: ['#000000', '#00ff00'],
    badges: ['mono', 'ІННОВАЦІЯ', 'АКЦІЯ']
  },
  {
    id: 3,
    imageUrl: watchApple, 
    title: "Apple Watch SE 3 GPS 40mm Starlight Aluminium Case with...",
    price: 13899,
    rating: 5,
    reviewsCount: 62,
    colors: ['#f5f5dc', '#000000'],
    badges: ['mono', 'АКЦІЯ', 'Fishka']
  },
  {
    id: 4,
    imageUrl: blackEarphones, 
    title: "Навушники Esperanza EH187K Black",
    price: 229,
    rating: 0,
    reviewsCount: 1,
    colors: ['#000000', '#ffffff'],
    badges: ['mono', 'Знижка', 'АКЦІЯ']
  },
  {
    id: 5,
    imageUrl: orangeEarphones, 
    title: "Навушники Canyon GTWS2 (CND-GTWS2O) Orange",
    price: 549,
    oldPrice: 899,
    discountPercentage: 39,
    rating: 4,
    reviewsCount: 24,
    colors: ['#ff8c00', '#000000'],
    badges: ['mono', 'Знижка', 'АКЦІЯ']
  }
];

type CartItem = {
  product: Product;
  quantity: number;
};

const ProductList = () => {
  const { searchQuery } = useSearch();

  const [favorites, setFavorites] = useState<number[]>(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleToggleFavorite = (product: Product) => {
    setFavorites(prev => 
      prev.includes(product.id as number)
        ? prev.filter(id => id !== product.id)
        : [...prev, product.id as number]
    );
  };

  const handleAddToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const filteredProducts = MOCK_PRODUCTS.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ padding: '0 30px 30px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', maxWidth: '800px', margin: '0 auto 30px' }}>
        <h1 style={{ fontSize: '24px', color: '#2c3e50', margin: 0 }}>
          Завдання 5: Пошук
        </h1>
        <div style={{ display: 'flex', gap: '20px', color: '#2c3e50' }}>
          <div>Улюблені: <strong>{favorites.length}</strong></div>
          <div>У кошику: <strong>{totalCartItems} шт.</strong></div>
        </div>
      </header>

      {searchQuery && (
        <div style={{ maxWidth: '800px', margin: '0 auto 20px', color: '#666' }}>
          Результати пошуку для <strong>"{searchQuery}"</strong>. Знайдено товарів: {filteredProducts.length}
        </div>
      )}
      
      {filteredProducts.length > 0 ? (
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              isFavorite={favorites.includes(product.id as number)}
              onToggleFavorite={handleToggleFavorite}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', fontSize: '18px', color: '#888', marginTop: '50px' }}>
          На жаль, нічого не знайдено.
        </div>
      )}
    </div>
  );
};

export default ProductList;
