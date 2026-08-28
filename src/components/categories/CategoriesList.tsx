import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { CategoryType } from '../../types/CategoryType';
import Category from './Category';
import CreateCategory from './CreateCategory';
import './CategoriesList.css';

const CategoriesList = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = searchParams.get('page');
  const currentPage = pageParam ? parseInt(pageParam, 10) : 1;
  const itemsPerPage = 4;

  const fetchCategories = async () => {
    setLoading(true);
    const apiUrl = import.meta.env.VITE_PATH_TO_SERVER + import.meta.env.VITE_PATH_TO_API + 'categories';
    
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Помилка отримання даних: ${response.status}`);
      }
      const data = await response.json();
      setCategories(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Не вдалося завантажити категорії');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const totalPages = Math.ceil(categories.length / itemsPerPage) || 1;
  
  const validPage = Math.max(1, Math.min(currentPage, totalPages));
  
  const startIndex = (validPage - 1) * itemsPerPage;
  const currentCategories = categories.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: newPage.toString() });
  };

  return (
    <div className="categories-page">
      <div className="categories-sidebar">
        <CreateCategory onCategoryAdded={fetchCategories} />
      </div>
      <div className="categories-main">
        <h2 className="categories-title">Список категорій</h2>
        {error && <div className="error-message">{error}</div>}
        {loading ? (
          <div className="loading-state">Завантаження...</div>
        ) : categories.length === 0 ? (
          <div className="empty-state">Список категорій порожній. Додайте нову!</div>
        ) : (
          <>
            <div className="categories-grid">
              {currentCategories.map((cat) => (
                <Category key={cat.id} category={cat} />
              ))}
            </div>
            
            {totalPages > 1 && (
              <div className="pagination">
                <button 
                  className="page-btn" 
                  onClick={() => handlePageChange(validPage - 1)} 
                  disabled={validPage === 1}
                >
                  Попередня
                </button>
                
                <div className="page-numbers">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button 
                      key={page}
                      className={`page-num-btn ${page === validPage ? 'active' : ''}`}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                
                <button 
                  className="page-btn" 
                  onClick={() => handlePageChange(validPage + 1)} 
                  disabled={validPage === totalPages}
                >
                  Наступна
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
export default CategoriesList;
