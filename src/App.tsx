import ProductCard from './components/ProductCard';
import type { Product } from './types/Product';
import blackEarphones from './assets/earphones_black.png';
import orangeEarphones from './assets/earphones_orange.png';
import './App.css';

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

  return (
    <div className="App" style={{ padding: '30px', backgroundColor: '#f5f7fa', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '24px', color: '#2c3e50', marginBottom: '30px', textAlign: 'center' }}>
        Завдання 3: Карточки товарів
      </h1>
      
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
