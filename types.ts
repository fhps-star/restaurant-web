export type MenuCategory = 'Starters' | 'Main Course' | 'Fast Food' | 'Drinks' | 'Desserts';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: MenuCategory | 'Special';
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface NavLink {
  label: string;
  href: string;
}