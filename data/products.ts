export type Category = 'living-room' | 'bedroom' | 'kitchen';

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  thumbnails: string[];
  description: string;
  category: Category;
  rating: number;
  reviewCount: number;
  size: string;
  isFavorite?: boolean;
};

const u = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

export const products: Product[] = [
  {
    id: '1',
    name: 'Square Storage Coffee Table',
    price: 1299,
    image: u('1567538096630-e0c55bd6374c'),
    thumbnails: [
      u('1567538096630-e0c55bd6374c', 200),
      u('1555041469-a586c61ea9bc', 200),
      u('1540574163026-643ea20ade25', 200),
      u('1493663284031-b7e3aefcae8e', 200),
      u('1538688525198-9b88f6f53126', 200),
    ],
    description:
      'Solid oak square coffee table with hidden storage compartment. Perfect centerpiece for your living room with timeless craftsmanship.',
    category: 'living-room',
    rating: 4.7,
    reviewCount: 124,
    size: '18"H x 48"W x 48"D',
    isFavorite: false,
  },
  {
    id: '2',
    name: 'Queen Sleeper Sofa',
    price: 1614,
    image: u('1555041469-a586c61ea9bc'),
    thumbnails: [
      u('1555041469-a586c61ea9bc', 200),
      u('1493663284031-b7e3aefcae8e', 200),
      u('1540574163026-643ea20ade25', 200),
      u('1567538096630-e0c55bd6374c', 200),
      u('1538688525198-9b88f6f53126', 200),
    ],
    description:
      'A versatile queen-size sleeper sofa with premium memory foam mattress. Cream linen upholstery brings warmth to any modern space.',
    category: 'living-room',
    rating: 4.8,
    reviewCount: 87,
    size: '36"H x 84"W x 38"D',
    isFavorite: false,
  },
  {
    id: '3',
    name: 'Curved Warm Brown Wood Dining Table',
    price: 1999,
    image: u('1577140917170-285929fb55b7'),
    thumbnails: [
      u('1577140917170-285929fb55b7', 200),
      u('1505693416388-ac5ce068fe85', 200),
      u('1517705008128-361805f42e86', 200),
      u('1538688525198-9b88f6f53126', 200),
      u('1493663284031-b7e3aefcae8e', 200),
    ],
    description:
      'Opposing barrel-curved supports create the bold silhouette while providing leg room for end-of-table seating.',
    category: 'kitchen',
    rating: 5.0,
    reviewCount: 98,
    size: '30"H x 95"W x 42"D',
    isFavorite: false,
  },
  {
    id: '4',
    name: 'Natural Solid Wood Narrow Nightstand',
    price: 499,
    image: u('1505693416388-ac5ce068fe85'),
    thumbnails: [
      u('1505693416388-ac5ce068fe85', 200),
      u('1517705008128-361805f42e86', 200),
      u('1567538096630-e0c55bd6374c', 200),
      u('1577140917170-285929fb55b7', 200),
      u('1540574163026-643ea20ade25', 200),
    ],
    description:
      'A narrow nightstand crafted from natural solid wood. Features a single drawer and an open shelf — ideal for tight bedrooms.',
    category: 'bedroom',
    rating: 4.5,
    reviewCount: 56,
    size: '24"H x 16"W x 14"D',
    isFavorite: true,
  },
  {
    id: '5',
    name: 'Light Brown Wood Swivel Counter Stool',
    price: 299,
    image: u('1538688525198-9b88f6f53126'),
    thumbnails: [
      u('1538688525198-9b88f6f53126', 200),
      u('1540574163026-643ea20ade25', 200),
      u('1555041469-a586c61ea9bc', 200),
      u('1493663284031-b7e3aefcae8e', 200),
      u('1567538096630-e0c55bd6374c', 200),
    ],
    description:
      'A 360° swivel counter stool with a contoured wooden seat. Sturdy four-leg base finished in warm light brown.',
    category: 'kitchen',
    rating: 4.6,
    reviewCount: 73,
    size: '36"H x 18"W x 18"D',
    isFavorite: true,
  },
  {
    id: '6',
    name: 'Edge Brass Arch Medicine Cabinet',
    price: 689,
    image: u('1517705008128-361805f42e86'),
    thumbnails: [
      u('1517705008128-361805f42e86', 200),
      u('1505693416388-ac5ce068fe85', 200),
      u('1577140917170-285929fb55b7', 200),
      u('1567538096630-e0c55bd6374c', 200),
      u('1493663284031-b7e3aefcae8e', 200),
    ],
    description:
      'Arch-shaped medicine cabinet with brass-finished trim. Mirror door opens to reveal three adjustable interior shelves.',
    category: 'bedroom',
    rating: 4.4,
    reviewCount: 41,
    size: '34"H x 18"W x 6"D',
    isFavorite: true,
  },
  {
    id: '7',
    name: 'Mid-Century Accent Armchair',
    price: 849,
    image: u('1540574163026-643ea20ade25'),
    thumbnails: [
      u('1540574163026-643ea20ade25', 200),
      u('1555041469-a586c61ea9bc', 200),
      u('1538688525198-9b88f6f53126', 200),
      u('1493663284031-b7e3aefcae8e', 200),
      u('1567538096630-e0c55bd6374c', 200),
    ],
    description:
      'Mid-century inspired accent armchair with tapered walnut legs and a deep boucle seat. A statement piece for any reading nook.',
    category: 'living-room',
    rating: 4.9,
    reviewCount: 152,
    size: '32"H x 30"W x 32"D',
    isFavorite: false,
  },
  {
    id: '8',
    name: 'Linen Upholstered Platform Bed',
    price: 1499,
    image: u('1493663284031-b7e3aefcae8e'),
    thumbnails: [
      u('1493663284031-b7e3aefcae8e', 200),
      u('1505693416388-ac5ce068fe85', 200),
      u('1517705008128-361805f42e86', 200),
      u('1538688525198-9b88f6f53126', 200),
      u('1555041469-a586c61ea9bc', 200),
    ],
    description:
      'Queen-size platform bed wrapped in soft natural linen. Low-profile design pairs effortlessly with both modern and minimalist bedrooms.',
    category: 'bedroom',
    rating: 4.7,
    reviewCount: 209,
    size: '48"H x 64"W x 86"D',
    isFavorite: false,
  },
];

export const categories: { label: string; value: Category | 'all' }[] = [
  { label: 'All Product', value: 'all' },
  { label: 'Living Room', value: 'living-room' },
  { label: 'Bedroom', value: 'bedroom' },
  { label: 'Kitchen', value: 'kitchen' },
];
