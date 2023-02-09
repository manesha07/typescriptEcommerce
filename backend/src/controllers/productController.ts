import * as productService from "../services/productServices.js";
import { Request, Response, NextFunction } from 'express';
//Create Product-- only for Admin
export function createProduct(req: Request, res: Response, next: NextFunction) {
  const product = req.body;

  productService
    .createProduct(req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

// export function getAllProducts(req: Request, res: Response, next: NextFunction) {
//   const product = req.params;
//   console.log("dsa",req.params)
//   productService
//     .getAllProducts(req.params)
//     .then((data) => res.json(data))
//     .catch((err) => next(err));
// }



export function getAllProducts(req: Request, res: Response, next: NextFunction) {
  const pageNumber= req.query.page || 1;
  const itemsPerPage = req.query.limit || 10;

  productService
    .getAllProducts(pageNumber, itemsPerPage)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

//get product details

export function getProductDetails(req: Request, res: Response, next: NextFunction) {
  const product = req.params.id;
  productService
    .getProductDetails(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

//Update product  -- only for Admin

export function updateProduct(req: Request, res: Response, next: NextFunction) {
  productService
    .updateProduct(req.params.id, req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

//Delete Product

export function deleteProduct(req: Request, res: Response, next: NextFunction) {
  productService
    .deleteProduct(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}