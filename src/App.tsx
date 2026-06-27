import { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';
import type { Product } from './types/Product';
import blackEarphones from './assets/earphones_black.png';
import orangeEarphones from './assets/earphones_orange.png';
import './App.css';

type CartItem = {
  product: Product;
  quantity: number;
};

const App = () => {
  const products: Product[] = [
    {
      id: 1,
      imageUrl: blackEarphones, 
      title: "Навушники Esperanza EH187K Black",
      price: 229,
      rating: 0,
      reviewsCount: 1,
      colors: ['#000000', '#ffffff'],
      badges: ['mono', 'Знижка', 'АКЦІЯ']
    },
    {
      id: 2,
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

  // Initialize state from LocalStorage
  const [favorites, setFavorites] = useState<number[]>(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  // Sync state to LocalStorage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Handlers
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

  return (
    <div className="App" style={{ padding: '30px', backgroundColor: '#f5f7fa', minHeight: '100vh' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', maxWidth: '800px', margin: '0 auto 30px' }}>
        <h1 style={{ fontSize: '24px', color: '#2c3e50', margin: 0 }}>
          Завдання 4: Local Storage
        </h1>
        <div style={{ display: 'flex', gap: '20px', color: '#2c3e50' }}>
          <div>Улюблені: <strong>{favorites.length}</strong></div>
          <div>У кошику: <strong>{totalCartItems} шт.</strong></div>
        </div>
      </header>
      
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            isFavorite={favorites.includes(product.id as number)}
            onToggleFavorite={handleToggleFavorite}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
