import { SearchProvider } from './context/SearchContext';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import './App.css';

const App = () => {
  return (
    <SearchProvider>
      <div className="App" style={{ backgroundColor: '#f5f7fa', minHeight: '100vh', paddingBottom: '50px' }}>
        <SearchBar />
        <ProductList />
      </div>
    </SearchProvider>
  );
};

export default App;
