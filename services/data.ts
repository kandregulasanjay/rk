import { Product, Store } from '../types';

// NOTE: Please ensure you place your image files in the 'public/images' folder 
// matching the filenames used below.

export const PRODUCTS: Product[] = [
  // TOP LOAD LIQUID DETERGENTS
  {
    id: 'p1',
    name: 'Liquid Detergent - Top Load (Smart Wash) 1L',
    shortDescription: 'High-efficiency liquid detergent for top load machines.',
    fullDescription: 'DK Smart Wash Top Load formula creates the perfect amount of lather to lift dirt in top-loading machines. Special formula that works deep into fibers for a brilliant clean.',
    price: 130,
    mrp: 220,
    image: '/images/dk_top_1l.jpg',
    category: 'Liquid',
    scent: 'Fresh Sky',
    rating: 4.9,
    reviews: 124,
    benefits: ['Rich Lather', 'Deep Cleaning', 'Easy Rinse', 'Top Load Optimized'],
    ingredients: ['Aqua', 'Surfactants', 'Sodium Carbonate', 'Fragrance']
  },
  {
    id: 'p2',
    name: 'Liquid Detergent - Top Load (Smart Wash) 5L',
    shortDescription: 'Value pack liquid detergent for top load machines.',
    fullDescription: 'The 5L DK Smart Wash for top load machines offers exceptional value. Its rich lather formula ensures thorough cleaning while being economical for larger households.',
    price: 550,
    mrp: 999,
    image: '/images/dk_top_5l.jpg',
    category: 'Liquid',
    scent: 'Fresh Sky',
    rating: 4.9,
    reviews: 98,
    benefits: ['Rich Lather', 'Value Size (5 Liters)', 'Deep Cleaning', 'Top Load Optimized'],
    ingredients: ['Aqua', 'Surfactants', 'Sodium Carbonate', 'Fragrance']
  },

  // FRONT LOAD LIQUID DETERGENTS
  {
    id: 'p3',
    name: 'Liquid Detergent - Front Load (Smart Wash) 1L',
    shortDescription: 'High-efficiency liquid detergent for front load machines.',
    fullDescription: 'Experience powerful cleaning performance in a convenient 1 Liter bottle. Perfect for front load washing machines with low-suds formula that protects your machine.',
    price: 130,
    mrp: 220,
    image: '/images/dk_front_1l.jpg',
    category: 'Liquid',
    scent: 'Fresh Sky',
    rating: 4.8,
    reviews: 156,
    benefits: ['Low Suds Formula', 'Color Protection', 'Machine Safe', 'Removes Tough Stains'],
    ingredients: ['Aqua', 'Anionic Surfactants', 'Enzymes', 'Optical Brighteners', 'Perfume']
  },
  {
    id: 'p4',
    name: 'Liquid Detergent - Front Load (Smart Wash) 5L',
    shortDescription: 'Value pack for front load washing machines.',
    fullDescription: 'The 5L DK Smart Wash is specifically formulated for front load washing machines. Its low-suds formula ensures a thorough clean without damaging your machine, while tackling tough stains.',
    price: 550,
    mrp: 999,
    image: '/images/dk_front_5l.jpg',
    category: 'Liquid',
    scent: 'Fresh Sky',
    rating: 4.9,
    reviews: 142,
    benefits: ['Low Suds Formula', 'Color Protection', 'Value Size (5 Liters)', 'Removes Tough Stains'],
    ingredients: ['Aqua', 'Anionic Surfactants', 'Enzymes', 'Optical Brighteners', 'Perfume']
  },

  // DISH WASH LIQUID
  {
    id: 'p5',
    name: 'Dish Wash Liquid 1L',
    shortDescription: 'Lemon-powered grease removal for sparkling dishes.',
    fullDescription: 'Cut through tough grease and grime with DK Dish Wash. Infused with natural lemon extracts, it leaves your dishes sparkling clean and your hands soft. High foaming action for maximum economy.',
    price: 120,
    mrp: 180,
    image: '/images/dk_dish_wash.jpg',
    category: 'Dish Wash',
    scent: 'Lemon',
    rating: 4.6,
    reviews: 210,
    benefits: ['Cuts Grease Fast', 'Gentle on Hands', 'Refreshing Lemon Scent', 'Residue Free'],
    ingredients: ['Aqua', 'Lemon Extract', 'Biodegradable Surfactants', 'Glycerin']
  },
  {
    id: 'p6',
    name: 'Dish Wash Liquid 500ml',
    shortDescription: 'Compact lemon-powered dish wash liquid.',
    fullDescription: 'Same powerful grease-cutting formula in a convenient 500ml size. Perfect for smaller households or limited storage space. Gentle on hands, tough on grease.',
    price: 80,
    mrp: 99,
    image: '/images/dk_dish_wash.jpg',
    category: 'Dish Wash',
    scent: 'Lemon',
    rating: 4.5,
    reviews: 178,
    benefits: ['Cuts Grease Fast', 'Gentle on Hands', 'Compact Size', 'Refreshing Lemon Scent'],
    ingredients: ['Aqua', 'Lemon Extract', 'Biodegradable Surfactants', 'Glycerin']
  },

  // FLOOR CLEANER
  {
    id: 'p7',
    name: 'Floor Cleaner 1L',
    shortDescription: 'Floral scented disinfectant floor cleaner.',
    fullDescription: 'Keep your home safe and smelling fresh with DK Floor Cleaner. Its powerful disinfecting formula kills 99.9% of germs while leaving a long-lasting floral fragrance. Safe for all floor types.',
    price: 120,
    mrp: 180,
    image: '/images/dk_floor_cleaner.jpg',
    category: 'Surface Cleaner',
    scent: 'Floral',
    rating: 4.8,
    reviews: 95,
    benefits: ['Kills 99.9% Germs', 'Long-lasting Fragrance', 'Streak Free Shine', 'Safe for Kids & Pets'],
    ingredients: ['Aqua', 'Benzalkonium Chloride', 'Floral Perfume', 'Surface Active Agents']
  },
  {
    id: 'p8',
    name: 'Floor Cleaner 500ml',
    shortDescription: 'Compact floral scented disinfectant floor cleaner.',
    fullDescription: 'Powerful disinfecting formula in a convenient 500ml size. Kills 99.9% of germs and leaves your floors sparkling clean with a pleasant floral fragrance.',
    price: 70,
    mrp: 99,
    image: '/images/dk_floor_cleaner.jpg',
    category: 'Surface Cleaner',
    scent: 'Floral',
    rating: 4.7,
    reviews: 82,
    benefits: ['Kills 99.9% Germs', 'Compact Size', 'Long-lasting Fragrance', 'Streak Free Shine'],
    ingredients: ['Aqua', 'Benzalkonium Chloride', 'Floral Perfume', 'Surface Active Agents']
  },

  // COMBO PACKS
  {
    id: 'p9',
    name: 'Home Care Combo Pack (Small)',
    shortDescription: 'Complete cleaning solution - 1 Liquid Detergent (1L) + 1 Floor Cleaner (500ml) + 1 Dish Wash (500ml)',
    fullDescription: 'Get everything you need for a sparkling clean home in one convenient pack. Includes 1L Liquid Detergent, 500ml Floor Cleaner, and 500ml Dish Wash Liquid. Perfect starter pack for new homes.',
    price: 210,
    mrp: 418,
    image: '/images/dk_dish_wash.jpg',
    category: 'Combo',
    scent: 'Mixed',
    rating: 4.9,
    reviews: 156,
    benefits: ['Complete Home Care', 'Value Pack', 'All Essential Products', 'Cost Effective'],
    ingredients: ['See individual products']
  },
  {
    id: 'p10',
    name: 'Home Care Combo Pack (Large)',
    shortDescription: 'Premium cleaning solution - 1 Liquid Detergent (5L) + 1 Floor Cleaner (1L) + 1 Dish Wash (1L)',
    fullDescription: 'The ultimate home care solution for larger families. Includes 5L Liquid Detergent, 1L Floor Cleaner, and 1L Dish Wash Liquid. Maximum value and convenience in one package.',
    price: 750,
    mrp: 1359,
    image: '/images/dk_front_5l.jpg',
    category: 'Combo',
    scent: 'Mixed',
    rating: 5.0,
    reviews: 203,
    benefits: ['Best Value', 'Complete Home Care', 'Premium Sizes', 'Family Pack'],
    ingredients: ['See individual products']
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