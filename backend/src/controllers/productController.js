import * as productService from "../services/productServices.js";

//Create Product-- only for Admin
export function createProduct(req, res, next) {
  const product = req.body;

  productService
    .createProduct(req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

// export function getAllProducts(req, res, next) {
//   const product = req.params;
//   console.log("dsa",req.params)
//   productService
//     .getAllProducts(req.params)
//     .then((data) => res.json(data))
//     .catch((err) => next(err));
// }



export function getAllProducts(req, res, next) {
  const pageNumber = req.query.page || 1;
  const itemsPerPage = req.query.limit || 10;

  productService
    .getAllProducts(pageNumber, itemsPerPage)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

//get product details

export function getProductDetails(req, res, next) {
  const product = req.params.id;
  productService
    .getProductDetails(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

//Update product  -- only for Admin

export function updateProduct(req, res, next) {
  productService
    .updateProduct(req.params.id, req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

//Delete Product

export function deleteProduct(req, res, next) {
  productService
    .deleteProduct(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}