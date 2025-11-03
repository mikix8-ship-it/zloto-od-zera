export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  author: string;
}

export interface Purchase {
  id: string;
  userId: string;
  productId: string;
  email: string;
  accessUrl: string;
  downloadToken: string;
  createdAt: Date;
  expiresAt: Date;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
  avatar?: string;
  rating: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface TableOfContentsItem {
  chapter: number;
  title: string;
  description?: string;
}

export interface Author {
  name: string;
  bio: string;
  image?: string;
  email: string;
}
