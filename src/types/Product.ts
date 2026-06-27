export type Product = {
  id: string | number;
  imageUrl: string;
  title: string;
  price: number;
  oldPrice?: number;
  discountPercentage?: number;
  rating: number; 
  reviewsCount: number;
  colors: string[]; 
  badges: string[]; 
};
