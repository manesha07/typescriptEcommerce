import * as productService from "../services/productServices.js";
import { Request, Response, NextFunction } from 'express';
import { AddProduct,UpdateProduct } from "../types";
//Create Product-- only for Admin
export function createProduct(req: Request, res: Response, next: NextFunction) {
  const body = req.body as AddProduct;

  productService
    .createProduct(req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

export function getAllProducts(
  req: Request<{ page: any; limit: any }>,
  res: Response,
  next: NextFunction
) {
  console.log("bhitra gayo?");
  const pageNumber: any = req.query.page || 1;
  const itemsPerPage: any = req.query.limit || 10;

  productService
    .getAllProducts(pageNumber, itemsPerPage)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

//get product details

export function getProductDetails(
  req: Request<{ id: number }>,
  res: Response,
  next: NextFunction
) {
  const product = req.params.id;
  productService
    .getProductDetails(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

//Update product  -- only for Admin

export function updateProduct(
  req: Request<{ id: any }>,
  res: Response,
  next: NextFunction
) {
  const body = req.body as UpdateProduct;
  productService
    .updateProduct(req.params.id,body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

//Delete Product

export function deleteProduct(
  req: Request<{ id: any }>,
  res: Response,
  next: NextFunction
) {
  console.log("req.body", req.params.id);
  productService
    .deleteProduct(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}
