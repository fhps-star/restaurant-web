import { MenuItem, Testimonial, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Special', href: '#special' },
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const SPECIAL_DISHES: MenuItem[] = [
  {
    id: 'sp1',
    name: 'Farmhouse Pizza',
    description: 'Loaded with cheese and fresh vegetables.',
    price: 14.99,
    category: 'Special',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'sp2',
    name: 'Royal Chicken Burger',
    description: 'Crispy chicken patty with secret spices.',
    price: 12.99,
    category: 'Special',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'sp3',
    name: 'Paneer Tikka',
    description: 'Cottage cheese cubes marinated in tandoori masala.',
    price: 15.99,
    category: 'Special',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'sp4',
    name: 'Hyderabadi Biryani',
    description: 'Aromatic basmati rice cooked with spices and herbs.',
    price: 18.99,
    category: 'Special',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'sp5',
    name: 'Creamy Pasta',
    description: 'Penne pasta tossed in white cream sauce.',
    price: 13.99,
    category: 'Special',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'sp6',
    name: 'Steamed Momos',
    description: 'Tibetan dumplings served with spicy chutney.',
    price: 9.99,
    category: 'Special',
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=600&q=80',
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // Starters
  {
    id: 's1',
    name: 'Samosa Platter',
    description: 'Crispy pastry filled with spiced potatoes and peas.',
    price: 6.99,
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 's2',
    name: 'Chicken Tikka',
    description: 'Boneless chicken chunks marinated in yogurt and spices.',
    price: 14.99,
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 's3',
    name: 'Onion Bhaji',
    description: 'Spiced onion fritters fried to perfection.',
    price: 8.50,
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=600&q=80',
  },
  
  // Main Course
  {
    id: 'm1',
    name: 'Butter Chicken',
    description: 'Tender chicken cooked in a rich tomato and butter gravy.',
    price: 22.99,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80',
    popular: true,
  },
  {
    id: 'm2',
    name: 'Dal Makhani',
    description: 'Black lentils cooked overnight with cream and butter.',
    price: 18.99,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'm3',
    name: 'Lamb Rogan Josh',
    description: 'Aromatic lamb curry with Kashmiri spices.',
    price: 24.99,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356f36?auto=format&fit=crop&w=600&q=80',
  },

  // Fast Food (Reusing some Specials or adding new)
  {
    id: 'f1',
    name: 'Masala Fries',
    description: 'Crispy fries tossed in Indian spices.',
    price: 6.99,
    category: 'Fast Food',
    image: 'https://images.unsplash.com/photo-1573080496987-aeb7d53385c7?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'f2',
    name: 'Veggie Wrap',
    description: 'Grilled vegetables wrapped in soft flatbread.',
    price: 10.99,
    category: 'Fast Food',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80',
  },

  // Drinks
  {
    id: 'd1',
    name: 'Mango Lassi',
    description: 'Traditional yogurt-based mango drink.',
    price: 5.99,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1571212515416-f786d79a2965?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'd2',
    name: 'Masala Chai',
    description: 'Spiced milk tea.',
    price: 4.50,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1619859016186-6331a9829775?auto=format&fit=crop&w=600&q=80',
  },

  // Desserts
  {
    id: 'de1',
    name: 'Gulab Jamun',
    description: 'Deep-fried milk solids soaked in sugar syrup.',
    price: 7.99,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1626202158864-1cf2a251e605?auto=format&fit=crop&w=600&q=80',
    popular: true,
  },
  {
    id: 'de2',
    name: 'Rasmalai',
    description: 'Soft cottage cheese patties in sweetened milk.',
    price: 8.99,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1616035882046-857e492212f0?auto=format&fit=crop&w=600&q=80',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Rajesh Kumar',
    content: "Best food in town! The Biryani reminded me of Hyderabad. Absolutely delicious.",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
  },
  {
    id: 't2',
    name: 'Priya Sharma',
    content: "Very tasty and affordable. The staff is polite and the ambience is royal.",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
  },
  {
    id: 't3',
    name: 'David Wilson',
    content: "Great service. The Butter Chicken is a must-try. Will definitely visit again.",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
  },
];

export const RESTAURANT_INFO = {
  name: 'Royal Spice Restaurant',
  phone: '+91 98765 43210',
  address: 'Level 1, Royal Plaza, Food District, Your City',
  email: 'info@royalspice.com',
  whatsapp: '919876543210',
  hours: {
    weekdays: '11:00 AM - 11:00 PM',
    weekends: '11:00 AM - 12:00 AM',
  },
  socials: {
    facebook: '#',
    instagram: '#',
    twitter: '#',
  }
};