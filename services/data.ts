import { Product, Store } from '../types';

// NOTE: Please ensure you place your image files in the 'public/images' folder 
// matching the filenames used below.

export const PRODUCTS: Product[] = [
  // TOP LOAD LIQUID DETERGENTS
  {
    id: 'p1',
    name: 'Liquid Detergent - Top Load (Smart Wash) 1L',
    shortDescription: 'High-efficiency liquid detergent for top load machines.',
    fullDescription: 'RK Smart Wash Top Load formula creates the perfect amount of lather to lift dirt in top-loading machines. Special formula that works deep into fibers for a brilliant clean.',
    price: 153,
    mrp: 225,
    image: '/images/dk_top_1l.jpg',
    category: 'Liquid Detergent',
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
    fullDescription: 'The 5L RK Smart Wash for top load machines offers exceptional value. Its rich lather formula ensures thorough cleaning while being economical for larger households.',
    price: 620,
    mrp: 999,
    image: '/images/dk_top_5l.jpg',
    category: 'Liquid Detergent',
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
    price: 150,
    mrp: 220,
    image: '/images/dk_front_1l.jpg',
    category: 'Liquid Detergent',
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
    fullDescription: 'The 5L RK Smart Wash is specifically formulated for front load washing machines. Its low-suds formula ensures a thorough clean without damaging your machine, while tackling tough stains.',
    price: 620,
    mrp: 999,
    image: '/images/dk_front_5l.jpg',
    category: 'Liquid Detergent',
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
    fullDescription: 'Cut through tough grease and grime with RK Dish Wash. Infused with natural lemon extracts, it leaves your dishes sparkling clean and your hands soft. High foaming action for maximum economy.',
    price: 123,
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
    price: 84,
    mrp: 99,
    image: '/images/dk_dish_wash1.jpg',
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
    fullDescription: 'Keep your home safe and smelling fresh with RK Floor Cleaner. Its powerful disinfecting formula kills 99.9% of germs while leaving a long-lasting floral fragrance. Safe for all floor types.',
    price: 123,
    mrp: 180,
    image: '/images/dk_floor_cleaner.jpg',
    category: 'Floor Cleaner',
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
    price: 78,
    mrp: 99,
    image: '/images/product1.jpg',
    category: 'Floor Cleaner',
    scent: 'Floral',
    rating: 4.7,
    reviews: 82,
    benefits: ['Kills 99.9% Germs', 'Compact Size', 'Long-lasting Fragrance', 'Streak Free Shine'],
    ingredients: ['Aqua', 'Benzalkonium Chloride', 'Floral Perfume', 'Surface Active Agents']
  },

  // COMBO PACKS
  {
    id: 'p9',
    name: 'Top Load Mini Saving Combo',
    shortDescription: 'Complete cleaning solution - 1 Liquid Detergent (1L) + 1 Floor Cleaner (500ml) + 1 Dish Wash (500ml)',
    fullDescription: 'Get everything you need for a sparkling clean home in one convenient pack. Includes 1L Liquid Detergent, 500ml Floor Cleaner, and 500ml Dish Wash Liquid. Perfect starter pack for new homes.',
    price: 260,
    mrp: 418,
    image: '/images/top-mini-combo.png',
    category: 'Combo',
    scent: 'Mixed',
    rating: 4.9,
    reviews: 156,
    benefits: ['Complete Home Care', 'Value Pack', 'All Essential Products', 'Cost Effective'],
    ingredients: ['See individual products']
  },
  {
    id: 'p10',
    name: 'Front Load Mini Saving Combo',
    shortDescription: 'Premium cleaning solution - 1 Liquid Detergent (5L) + 1 Floor Cleaner (1L) + 1 Dish Wash (1L)',
    fullDescription: 'The ultimate home care solution for larger families. Includes 5L Liquid Detergent, 1L Floor Cleaner, and 1L Dish Wash Liquid. Maximum value and convenience in one package.',
    price: 260,
    mrp: 418,
    image: '/images/combo2.jpg',
    category: 'Combo',
    scent: 'Mixed',
    rating: 5.0,
    reviews: 203,
    benefits: ['Best Value', 'Complete Home Care', 'Premium Sizes', 'Family Pack'],
    ingredients: ['See individual products']
  },
  {
    id: 'p11',
    name: 'Top Load Mega Saving Combo',
    shortDescription: 'Complete cleaning solution - 1 Liquid Detergent (1L) + 1 Floor Cleaner (500ml) + 1 Dish Wash (500ml)',
    fullDescription: 'Get everything you need for a sparkling clean home in one convenient pack. Includes 1L Liquid Detergent, 500ml Floor Cleaner, and 500ml Dish Wash Liquid. Perfect starter pack for new homes.',
    price: 820,
    mrp: 1359,
    image: '/images/top-combo.jpg',
    category: 'Combo',
    scent: 'Mixed',
    rating: 4.9,
    reviews: 156,
    benefits: ['Complete Home Care', 'Value Pack', 'All Essential Products', 'Cost Effective'],
    ingredients: ['See individual products']
  },
  {
    id: 'p12',
    name: 'Front Load Mega Saving Combo',
    shortDescription: 'Premium cleaning solution - 1 Liquid Detergent (5L) + 1 Floor Cleaner (1L) + 1 Dish Wash (1L)',
    fullDescription: 'The ultimate home care solution for larger families. Includes 5L Liquid Detergent, 1L Floor Cleaner, and 1L Dish Wash Liquid. Maximum value and convenience in one package.',
    price: 820,
    mrp: 1359,
    image: '/images/front-combo.jpg',
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
    excerpt: 'Spilled your morning brew? Act fast with cold water and a dab of RK Smart Wash.',
    image: '/images/coffe-strain.png',
    category: 'Stain Removal',
    content: `Coffee stains can be stubborn, but with the right approach, they're easy to tackle. Here's how to remove coffee stains effectively:

Step 1: Act Fast
The sooner you treat a coffee stain, the easier it will be to remove. Fresh stains are much simpler to handle than dried ones.

Step 2: Rinse with Cold Water
Run cold water through the back of the stain. This pushes the coffee out of the fabric fibers rather than deeper into them. Avoid hot water as it can set the stain permanently.

Step 3: Apply RK Liquid Detergent
Apply a small amount of RK Liquid Detergent directly to the stain. Gently rub the fabric together or use a soft brush to work the detergent into the stain.

Step 4: Let It Sit
Allow the detergent to sit on the stain for 5-10 minutes. This gives the cleaning agents time to break down the coffee oils and pigments.

Step 5: Wash as Normal
Wash the garment in your washing machine using RK Liquid Detergent. For top load machines, use our Top Load formula; for front load machines, use the Front Load formula.

Pro Tip: For older, set-in coffee stains, soak the garment in a mixture of water and RK Liquid Detergent for 30 minutes before washing.`
  },
  {
    id: 't2',
    title: 'Front Load vs Top Load',
    excerpt: 'Why using the right detergent type matters for your machine\'s lifespan.',
    image: '/images/washing-machine.png',
    category: 'Machine Care',
    content: `Choosing the right detergent for your washing machine type is crucial for optimal cleaning and machine longevity. Here's what you need to know:

Top Load Washing Machines
Top load machines use more water and agitate clothes vigorously. They require detergents that produce rich lather to lift dirt effectively.

- Use RK Liquid Detergent - Top Load (Smart Wash)
- Rich lather formula works with high water levels
- Deep cleaning action for heavily soiled clothes
- Works effectively in both hot and cold water

Front Load Washing Machines
Front load machines use less water and tumble clothes gently. They require low-suds detergents to prevent excess foam buildup.

- Use RK Liquid Detergent - Front Load (Smart Wash)
- Low-suds formula prevents residue buildup
- Concentrated cleaning power
- Protects your machine from damage

Why It Matters
Using the wrong detergent can cause excess foam in front load machines leading to poor rinsing, residue buildup that can damage seals and drums, reduced cleaning effectiveness, and unpleasant odors over time.

RK Liquid Detergent Recommendation
Always match your detergent to your machine type. RK offers specifically formulated products for both machine types, ensuring optimal cleaning and machine protection.`
  },
  {
    id: 't3',
    title: 'Sparkling Dishes Tips',
    excerpt: 'Soak tough pans with a drop of RK Dish Wash for 10 minutes before scrubbing.',
    image: '/images/dish-wash.png',
    category: 'Kitchen Tips',
    content: `Getting sparkling clean dishes is easy with the right technique and RK Dish Wash. Follow these tips for perfect results every time:

Pre-Soaking Magic
For tough, stuck-on food: Fill the pan with warm water, add a few drops of RK Dish Wash, let it soak for 10-15 minutes, and food residue will lift off easily.

The Right Amount
A little goes a long way with RK Dish Wash. For a sink full of dishes use 2-3 squirts, for individual items use 1 small drop, and for greasy pans use 2 drops directly on the surface.

Hot vs Cold Water
Use hot water for greasy dishes and cookware, warm water for everyday dishes and glasses, and cool water for delicate items.

Cleaning Order
Wash dishes in this order for best results: glasses and cups first (least dirty), then plates and bowls, utensils, and finally pots and pans (most soiled).

Rinsing Tips
Rinse thoroughly with clean water. Air dry on a rack for streak-free finish. For crystal-clear glasses, rinse with a splash of vinegar.

RK Dish Wash Benefits
Cuts through grease instantly, gentle on hands, refreshing lemon scent, and leaves a residue-free shine.`
  },
  {
    id: 't4',
    title: 'Safe Floors for Babies',
    excerpt: 'How to disinfect floors effectively without harsh chemical residues.',
    image: '/images/floor-clean.png',
    category: 'Home Hygiene',
    content: `When you have little ones crawling around, clean floors are essential. Here's how to keep your floors safe and hygienic with RK Floor Cleaner:

Why Floor Hygiene Matters
Babies spend a lot of time on the floor - crawling, playing, and even putting toys in their mouths. Clean floors protect them from harmful bacteria and germs, allergens and dust, and chemical residues from improper cleaning.

Safe Cleaning with RK Floor Cleaner
RK Floor Cleaner is formulated to be tough on germs but safe for your family. It kills 99.9% of germs, leaves no harmful residue when dry, has a pleasant non-irritating floral fragrance, and is safe for all floor types.

Proper Dilution
For baby-safe cleaning: Add 2 capfuls of RK Floor Cleaner to a bucket of water, mop the floor thoroughly, and allow to air dry completely before letting babies play.

Cleaning Frequency
Clean high-traffic areas and play areas daily. Bedrooms should be cleaned 2-3 times per week. After guests visit, clean the same day.

Extra Tips for Baby Safety
Always let floors dry completely before allowing crawling. Clean up spills immediately. Pay extra attention to corners and edges. Wash baby toys regularly with diluted RK Dish Wash.

RK Floor Cleaner Benefits
Long-lasting fragrance, streak-free shine, safe for kids and pets when dry, and works on tiles, marble, and vinyl.`
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
  { id: 1, image: 'https://picsum.photos/seed/lg1/400/400', likes: 124, caption: 'Fresh sheets feel the best! #RKLiquidDetergent #SmartWash' },
  { id: 2, image: 'https://picsum.photos/seed/lg2/400/400', likes: 89, caption: 'Dishes done in minutes. 🍋 #RKDishWash' },
  { id: 3, image: 'https://picsum.photos/seed/lg3/400/400', likes: 256, caption: 'Floors so shiny you can see yourself. ✨' },
  { id: 4, image: 'https://picsum.photos/seed/lg4/400/400', likes: 145, caption: 'Laundry day made easy. #FrontLoad' },
];