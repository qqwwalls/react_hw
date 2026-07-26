import { useEffect, useState } from 'react';
import type { CategoryType } from '../../types/CategoryType';
import Category from './Category';
import CreateCategory from './CreateCategory';
import './CategoriesList.css';

const CategoriesList = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

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
          <div className="categories-grid">
            {categories.map((cat) => (
              <Category key={cat.id} category={cat} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default CategoriesList;
