export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  image: string;
  category: 'Liquid' | 'Powder' | 'Pods' | 'Dish Wash' | 'Surface Cleaner';
  scent: 'Fresh Sky' | 'Lavender' | 'Unscented' | 'Lemon' | 'Floral';
  rating: number;
  reviews: number;
  benefits: string[];
  ingredients: string[];
}

export interface Store {
  id: string;
  name: string;
  address: string;
  distance: string;
  lat: number;
  lng: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface FilterState {
  category: string;
  priceRange: [number, number];
  scent: string;
}