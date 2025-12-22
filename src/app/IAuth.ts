export interface User {}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
    profile: {
      _id: string;
      first_name: string;
      last_name: string;
      email: string;
      status: string;
      role: string;
      shipping_addresses: any[];
    };
  };
  code: number;
  status: string;
  timestamp: string;
}

export interface IRegisterRequest {
  first_name: string;
  last_name: string;
  password: string;
  email: string;
  role: 'admin' | 'customer';
  id?: string;
}

export interface IRegisterResponse {
  message: string;
  data:{
  first_name: string;
  last_name: string;
  email: string;
  status: string;
  role: string;
  _id: string;
  shipping_addresses: any[];
  updatedAt: string;
  createdAt: string;
  __v: number;
};
  code: number;
  status: string;
  timestamp: string;
}

export interface IForgotPasswordRequest {
  email : string;
}

export interface IForgotPasswordResponse {
  message: string;
  code: number;
  status: string;
  timestamp: string;
}

export interface IResetPassword {
  code: number;
  status: string;
  message: string;
  timestamp: string;
}

export interface IChangePassword {
  code: number;
  status: string;
  message: string[];
  timestamp: string;
}

export interface IOneBookResponse {
  _id: string;
  name: string;
  description: string;
  author: string;
  price: number;
  image: string;
  category: Category;
  status: string;
}

export interface Category {
  _id: string;
  title: string;
  status: string;
  updatedAt: string;
  createdAt: string;
  __v: number;
}

export interface ICCategoryBooksResponse {
  _id: string;
  title: string;
  status: string;
  books: Book[];
}

export interface Book {
  _id: string;
  name: string;
  description: string;
  author: string;
  price: number;
  image: string;
  status: string;
}