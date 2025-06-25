import type { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Mabuyu (Baobab Bites)',
    slug: 'mabuyu',
    description:
      'A sweet and tangy candy made from the seeds of the baobab fruit, coated in a vibrant, sugary layer. A beloved coastal delicacy, perfect for a burst of tropical flavor.',
    price: 50,
    image: 'https://storage.googleapis.com/maker-studio-project-images-prod/v1-36451631520-4155a305-a83d-4c32-b7a6-68b3231f2371.jpg',
    imageHint: 'baobab candy',
    ingredients: ['Baobab Seeds', 'Sugar', 'Food Coloring', 'Cardamom', 'Chili Powder (optional)'],
    origin: 'Coastal Kenya',
    spiceLevel: 'Mild',
  },
  {
    id: '2',
    name: 'Achari (Spiced Mango)',
    slug: 'achari-mango',
    description:
      'Dried mango slices coated in a sour and spicy achari masala. A popular tangy snack that packs a flavorful punch.',
    price: 50,
    image: 'https://storage.googleapis.com/maker-studio-project-images-prod/v1-36451631520-a681df77-3e5f-4a39-bd3c-8a032de97e16.jpg',
    imageHint: 'spiced mango',
    ingredients: ['Dried Mango', 'Chili Powder', 'Salt', 'Spices', 'Citric Acid'],
    origin: 'South Asia',
    spiceLevel: 'Medium',
  },
  {
    id: '3',
    name: 'Spicy Korosho (Cashews)',
    slug: 'spicy-korosho',
    description:
      'Crunchy, premium cashews roasted to perfection and tossed in a signature blend of coastal spices. An addictive snack with a satisfying kick.',
    price: 200,
    image: 'https://storage.googleapis.com/maker-studio-project-images-prod/v1-36451631520-22c92bd1-b0e6-425b-80a9-25867990176d.jpg',
    imageHint: 'spiced cashews',
    ingredients: ['Cashews', 'Salt', 'Chili Powder', 'Lime', 'Paprika', 'Garlic Powder'],
    origin: 'Tanzania',
    spiceLevel: 'Hot',
  },
  {
    id: '4',
    name: 'Korosho Butter',
    slug: 'korosho-butter',
    description:
      'Creamy, rich, and utterly delicious butter made from stone-ground roasted cashews. A hint of sea salt makes it the perfect spread for toast, fruit, or just a spoonful.',
    price: 350,
    image: 'https://storage.googleapis.com/maker-studio-project-images-prod/v1-36451631520-2c70a92d-f952-4dd1-a20b-04470d9a6c9d.jpg',
    imageHint: 'cashew butter',
    ingredients: ['Roasted Cashews', 'Sea Salt'],
    origin: 'East Africa',
    spiceLevel: 'Mild',
  },
];
