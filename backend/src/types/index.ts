export interface AddUsers {
    name:string,
    username:string,
    password:string,
    email:string
}
export interface UpdateUsers {
  name:string | null,
  username:string | null,
  password:string | null,
  email:string| null
}
export interface LoginUsers {
  username: string;
  password: string;
}
export interface ExistingUser {
  id: number,
  name: string,
  email: string,
  password:string,
  username ?:string
}
export interface AddProduct {
  name:string,
  description:string,
  price:number,
  stock:number,
  category:string,
  images:string
}
export interface ExistingProduct {
  id:number
  name:string,
  description:string,
  price:number,
  stock:number,
  category:string,
  images:string
}
export interface UpdateProduct {
  name:string| null,
  description:string| null,
  price:number| null,
  stock:number| null,
  category:string| null,
  images:string| null
}
export interface Configuration {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
}