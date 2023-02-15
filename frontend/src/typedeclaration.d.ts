declare module "*.jpg" {
  const value: any;
  export default value;
}

export interface UserType {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface SuccessResponse {
  data: [];
  message?: string;
}
export interface ErrorResponse {
  code: number;
  message: string;
  details: string;
}

export type Response = SuccessResponse | ErrorResponse;

export interface ProductType {
  i?: number;
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  images: string;
}

export interface CartProductType {
  i?: number;
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  images: string;
  cartQuantity: number;
}

export interface RequestHeaders {
  "Content-Type"?: string;
  "Authorization"?: string;
}

export interface LoginSuccessResponse {
  data: {
    token: string;
    user: {};
  };
  message?: string;
}
export interface LoginErrorResponse {
  code: number;
  message: string;
  details: string;
}

export type LoginResponse = LoginSuccessResponse | LoginErrorResponse;
