import type { CategoryType } from '../../types/CategoryType';
import './Category.css';

const Category = ({ category }: { category: CategoryType }) => {
  const serverPath = import.meta.env.VITE_PATH_TO_SERVER || 'http://localhost:5097/';
  const imagePath = import.meta.env.VITE_PATH_TO_IMAGE_CATEGORIES || 'images';
  
  const imageUrl = category.url.startsWith('http') 
    ? category.url 
    : `${serverPath}${imagePath}/${category.url}`;

  return (
    <div className="category-card">
      <div className="category-image-wrap">
        <img
          src={imageUrl}
          alt={category.name}
          className="category-image"
          onError={(e) => {
             (e.target as HTMLImageElement).src = 'https://placehold.co/400x300?text=No+Image';
          }}
        />
      </div>
      <div className="category-info">
        <div className="category-header">
          <h2 className="category-title">{category.name}</h2>
          <span className="category-id">#{category.id}</span>
        </div>
        <div className="category-details">
          <p className="detail-row">
            <span>Slug:</span>
            <span className="detail-val">{category.slug}</span>
          </p>
          <p className="detail-row">
            <span>Parent:</span>
            <span className="detail-val">{category.parentId ?? "Root"}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Category;
