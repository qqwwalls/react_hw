import ProductCard from './components/ProductCard';
import { Product } from './types/Product';
import './App.css';

const App = () => {
  const products: Product[] = [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=300", 
      title: "Навушники Esperanza EH187K Black",
      price: 229,
      rating: 0,
      reviewsCount: 1,
      colors: ['#000000', '#ffffff'],
      badges: ['mono', 'Знижка', 'АКЦІЯ']
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1606220588913-b3aec04927f8?q=80&w=300", 
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
