export interface User {
  id: number;
  email: string;
  name: string;
  posts?: Post[];
  comments?: Comment[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  category: Category;
  published: boolean;
  authorId: number;
  author?: User;
  comments?: Comment[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Comment {
  id: number;
  content: string;
  approved: boolean;
  post: Post;
  postId: string;
  author: User;
  authorId: number;
  createdAt: Date;
  updatedAt: Date;
}

export enum Category {
  CSS = 'CSS',
  JavaScript = 'JavaScript',
  React = 'React',
  Vue = 'Vue',
  Tailwind = 'Tailwind'
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface PaginationInput {
  skip?: number;
  take?: number;
}