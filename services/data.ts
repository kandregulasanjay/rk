import { Product, Store } from '../types';

// NOTE: Please ensure you place your image files in the 'public/images' folder 
// matching the filenames used below.

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'DK Smart Wash - Front Load (5L)',
    shortDescription: 'High-efficiency liquid detergent for front load machines.',
    fullDescription: 'The 5L DK Smart Wash is specifically formulated for front load washing machines. Its low-suds formula ensures a thorough clean without damaging your machine, while the new smart formula tackles tough stains and preserves fabric color.',
    price: 24.99,
    // Ensure you save the 5L bottle image as 'dk_front_5l.jpg' in public/images/
    image: '/images/dk_front_5l.jpg', 
    category: 'Liquid',
    scent: 'Fresh Sky',
    rating: 4.9,
    reviews: 124,
    benefits: ['Low Suds Formula', 'Color Protection', 'Value Size (5 Liters)', 'Removes Tough Stains'],
    ingredients: ['Aqua', 'Anionic Surfactants', 'Enzymes', 'Optical Brighteners', 'Perfume']
  },
  {
    id: 'p2',
    name: 'DK Smart Wash - Front Load (1L)',
    shortDescription: 'Compact high-efficiency detergent for daily use.',
    fullDescription: 'Experience the same powerful cleaning performance of DK Smart Wash in a convenient 1 Liter bottle. Perfect for smaller households or limited storage space. Designed for Front Loaders.',
    price: 6.99,
    // Ensure you save the 1L purple/blue bottle image here
    image: '/images/dk_front_1l.jpg',
    category: 'Liquid',
    scent: 'Fresh Sky',
    rating: 4.8,
    reviews: 89,
    benefits: ['Smart Wash Technology', 'Prevents Fading', 'Residue Free'],
    ingredients: ['Aqua', 'Cleaning Agents', 'Stain Removers', 'Fresh Scent']
  },
  {
    id: 'p3',
    name: 'DK Smart Wash - Top Load (1L)',
    shortDescription: 'Specially formulated for top load washing machines.',
    fullDescription: 'DK Smart Wash Top Load formula creates the perfect amount of lather to lift dirt in top-loading machines. The green label signifies our special formula that works deep into fibers for a brilliant clean.',
    price: 6.99,
    // Ensure you save the 1L green bottle image here
    image: '/images/dk_top_1l.jpg',
    category: 'Liquid',
    scent: 'Fresh Sky',
    rating: 4.7,
    reviews: 156,
    benefits: ['Rich Lather', 'Deep Cleaning', 'Easy Rinse', 'Top Load Optimized'],
    ingredients: ['Aqua', 'Surfactants', 'Sodium Carbonate', 'Fragrance']
  },
  {
    id: 'p4',
    name: 'DK Dish Wash Liquid (1L)',
    shortDescription: 'Lemon-powered grease removal for sparkling dishes.',
    fullDescription: 'Cut through tough grease and grime with DK Dish Wash. Infused with natural lemon extracts, it leaves your dishes sparkling clean and your hands soft. High foaming action for maximum economy.',
    price: 3.99,
    // Ensure you save the Yellow Dish Wash image here
    image: '/images/dk_dish_wash.jpg',
    category: 'Dish Wash',
    scent: 'Lemon',
    rating: 4.6,
    reviews: 210,
    benefits: ['Cuts Grease Fast', 'Gentle on Hands', 'Refreshing Lemon Scent', 'Residue Free'],
    ingredients: ['Aqua', 'Lemon Extract', 'Biodegradable Surfactants', 'Glycerin']
  },
  {
    id: 'p5',
    name: 'DK Floor Cleaner (500ml)',
    shortDescription: 'Floral scented disinfectant floor cleaner.',
    fullDescription: 'Keep your home safe and smelling fresh with DK Floor Cleaner. Its powerful disinfecting formula kills 99.9% of germs while leaving a long-lasting floral fragrance. Safe for all floor types.',
    price: 2.99,
    // Ensure you save the Pink Floor Cleaner image here
    image: '/images/dk_floor_cleaner.jpg',
    category: 'Surface Cleaner',
    scent: 'Floral',
    rating: 4.8,
    reviews: 95,
    benefits: ['Kills 99.9% Germs', 'Long-lasting Fragrance', 'Streak Free Shine', 'Safe for Kids & Pets'],
    ingredients: ['Aqua', 'Benzalkonium Chloride', 'Floral Perfume', 'Surface Active Agents']
  }
];

export const STORES: Store[] = [
  { id: 's1', name: 'SuperMart Downtown', address: '123 Main St, Cityville', distance: '0.8 miles', lat: 40.7128, lng: -74.0060 },
  { id: 's2', name: 'EcoGrocer West', address: '456 Green Ave, Westside', distance: '2.4 miles', lat: 40.7300, lng: -74.0100 },
  { id: 's3', name: 'Family Market', address: '789 Oak Ln, Suburbia', distance: '5.1 miles', lat: 40.7500, lng: -73.9900 },
];

export const LAUNDRY_TIPS = [
  {
    id: 't1',
    title: 'How to Remove Coffee Stains',
    excerpt: 'Spilled your morning brew? Act fast with cold water and a dab of DK Smart Wash.',
    image: 'https://picsum.photos/seed/coffee/600/400',
    category: 'Stain Removal'
  },
  {
    id: 't2',
    title: 'Front Load vs Top Load',
    excerpt: 'Why using the right detergent type matters for your machine\'s lifespan.',
    image: 'https://picsum.photos/seed/machine/600/400',
    category: 'Machine Care'
  },
  {
    id: 't3',
    title: 'Sparkling Dishes Tips',
    excerpt: 'Soak tough pans with a drop of DK Dish Wash for 10 minutes before scrubbing.',
    image: 'https://picsum.photos/seed/dishes/600/400',
    category: 'Kitchen Tips'
  },
  {
    id: 't4',
    title: 'Safe Floors for Babies',
    excerpt: 'How to disinfect floors effectively without harsh chemical residues.',
    image: 'https://picsum.photos/seed/floor/600/400',
    category: 'Home Hygiene'
  }
];

export const STAINS = [
  { name: 'Coffee', icon: '☕' },
  { name: 'Oil & Grease', icon: '🍔' },
  { name: 'Grass', icon: '🌿' },
  { name: 'Red Wine', icon: '🍷' },
  { name: 'Ink', icon: '🖊️' },
  { name: 'Chocolate', icon: '🍫' },
  { name: 'Sweat', icon: '💦' },
  { name: 'Mud', icon: '👢' },
  { name: 'Makeup', icon: '💄' },
  { name: 'Tomato Sauce', icon: '🍝' },
];

export const LAUNDRYGRAM_POSTS = [
  { id: 1, image: 'https://picsum.photos/seed/lg1/400/400', likes: 124, caption: 'Fresh sheets feel the best! #CleanSky #DKSmartWash' },
  { id: 2, image: 'https://picsum.photos/seed/lg2/400/400', likes: 89, caption: 'Dishes done in minutes. 🍋 #DKDishWash' },
  { id: 3, image: 'https://picsum.photos/seed/lg3/400/400', likes: 256, caption: 'Floors so shiny you can see yourself. ✨' },
  { id: 4, image: 'https://picsum.photos/seed/lg4/400/400', likes: 145, caption: 'Laundry day made easy. #FrontLoad' },
];