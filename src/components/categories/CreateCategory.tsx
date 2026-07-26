import { useState } from 'react';
import type { FormEvent } from 'react';
import './CreateCategory.css';

const CreateCategory = ({ onCategoryAdded }: { onCategoryAdded?: () => void }) => {
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [url, setUrl] = useState('');
  const [parentId, setParentId] = useState<number | ''>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const apiUrl = import.meta.env.VITE_PATH_TO_SERVER + import.meta.env.VITE_PATH_TO_API + 'categories';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          slug,
          url,
          parentId: parentId === '' ? null : Number(parentId)
        }),
      });

      if (!response.ok) {
        throw new Error(`Помилка сервера: ${response.status}`);
      }

      setName('');
      setSlug('');
      setUrl('');
      setParentId('');
      
      if (onCategoryAdded) {
        onCategoryAdded();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Сталася невідома помилка при відправці запиту на сервер');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="create-category-wrapper">
      <h2 className="form-title">Додати нову категорію</h2>
      {error && <div className="form-error">{error}</div>}
      <form onSubmit={handleSubmit} className="create-category-form">
        <div className="form-group">
          <label>Назва категорії *</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Введіть назву"
          />
        </div>
        <div className="form-group">
          <label>Slug (URL) *</label>
          <input
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
            placeholder="напр., smartphones"
          />
        </div>
        <div className="form-group">
          <label>URL зображення *</label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            placeholder="https://... або назва файлу"
          />
        </div>
        <div className="form-group">
          <label>ID батьківської категорії</label>
          <input
            type="number"
            value={parentId}
            onChange={(e) => setParentId(e.target.value)}
            placeholder="Залиште пустим, якщо це коренева категорія"
            min="1"
          />
        </div>
        <button type="submit" disabled={isSubmitting} className="submit-btn">
          {isSubmitting ? 'Збереження...' : 'Створити категорію'}
        </button>
      </form>
    </div>
  );
};

export default CreateCategory;
