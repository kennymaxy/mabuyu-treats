import type { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Mabuyu (Baobab Bites)',
    slug: 'mabuyu',
    description:
      'A sweet and tangy candy made from the seeds of the baobab fruit, coated in a vibrant, sugary layer. A beloved coastal delicacy, perfect for a burst of tropical flavor.',
    price: 50,
    image: '/images/mabuyu.png',
    imageHint: 'baobab candy',
    ingredients: ['Baobab Seeds', 'Sugar', 'Food Coloring', 'Cardamom', 'Chili Powder (optional)'],
    origin: 'Coastal Kenya',
    spiceLevel: 'Sweet/Hot/Mild',
    reviews: [
      { id: 'r1', name: 'Aisha', rating: 5, comment: "Absolutely addictive! The perfect mix of sweet and sour.", date: '2024-06-15' },
      { id: 'r2', name: 'Brian', rating: 4, comment: "Reminds me of my childhood in Mombasa. So authentic.", date: '2024-06-12' },
      { id: 'review-mabuyu-1', name: 'Stephanie Opiyo', rating: 5, comment: "They are really good and tasty.", date: '2024-07-29' },
      { id: 'review-mabuyu-2', name: 'Grace Mugo', rating: 5, comment: "They are really good.", date: '2024-07-28' },
      { id: 'review-mabuyu-3', name: 'Emma Paul', rating: 5, comment: "They are really good and sweet.", date: '2024-07-27' },
    ],
  },
  {
    id: '2',
    name: 'Achari (Spiced Mango)',
    slug: 'achari-mango',
    description:
      'Dried mango slices coated in a sour and spicy achari masala. A popular tangy snack that packs a flavorful punch.',
    price: 50,
    image: '/images/achari.png',
    imageHint: 'spiced mango',
    ingredients: ['Dried Mango', 'Chili Powder', 'Salt', 'Spices', 'Citric Acid'],
    origin: 'Coastal Kenya',
    spiceLevel: 'Sweet and sour',
    reviews: [
       { id: 'r3', name: 'Fatima', rating: 5, comment: "The spice blend is incredible. My favorite snack!", date: '2024-06-20' },
       { id: 'review-achari-1', name: 'Stephanie Opiyo', rating: 5, comment: "They are very good and so sweet.", date: '2024-07-29' },
    ],
  },
  {
    id: '3',
    name: 'Tasty Korosho (Cashews)',
    slug: 'tasty-korosho',
    description:
      'Crunchy, premium cashews roasted to perfection and tossed in a signature blend of coastal spices. An addictive snack with a satisfying kick.',
    price: 200,
    image: '/images/korosho.png',
    imageHint: 'spiced cashews',
    ingredients: ['Cashews', 'Salt', 'Chili Powder', 'Lime', 'Paprika', 'Garlic Powder'],
    origin: 'Coastal Kenya',
    spiceLevel: 'Salty',
    reviews: [
       { id: 'r4', name: 'Wanjiku K.', rating: 5, comment: "I've never tasted cashews this good. The spice level is perfect and the quality is outstanding. Will be ordering again!", date: '2024-06-18' },
       { id: 'r5', name: 'David', rating: 4, comment: "Great for movie nights. They have a nice crunch and flavor.", date: '2024-06-10' },
    ],
  },
  {
    id: '4',
    name: 'Korosho Butter',
    slug: 'korosho-butter',
    description:
      'Creamy, rich, and utterly delicious butter made from stone-ground roasted cashews. A hint of sea salt makes it the perfect spread for toast, fruit, or just a spoonful.',
    price: 350,
    image: '/images/korosho-butter.png',
    imageHint: 'cashew butter',
    ingredients: ['Roasted Cashews', 'Sea Salt'],
    origin: 'Coastal Kenya',
    spiceLevel: 'Sweet',
    reviews: [
      { id: 'r6', name: 'Cherono T.', rating: 5, comment: "The Korosho Butter is divine. It's so creamy and has just the right amount of salt. I put it on everything!", date: '2024-06-22' },
      { id: 'r7', name: 'Mike', rating: 4, comment: "A bit pricey, but the quality is undeniable. Great product.", date: '2024-06-14' },
      { id: 'r8', name: 'Nasra A.', rating: 5, comment: "This is the best cashew butter I have ever had. It's smooth and tastes so natural. My whole family loves it.", date: '2024-06-25' },
    ],
  },
];
