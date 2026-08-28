import { Routes, Route } from 'react-router-dom';
import { SearchProvider } from './context/SearchContext';
import { AuthProvider } from './context/AuthContext';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import CategoriesList from './components/categories/CategoriesList';
import Header from './components/Header';
import './App.css';

const Home = () => (
  <>
    <SearchBar />
    <ProductList />
    <CategoriesList />
  </>
);

const App = () => {
  return (
    <AuthProvider>
      <SearchProvider>
        <div className="App" style={{ backgroundColor: '#f5f7fa', minHeight: '100vh' }}>
          <Header />
          <div style={{ paddingBottom: '50px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </SearchProvider>
    </AuthProvider>
  );
};

export default App;
