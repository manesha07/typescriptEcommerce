import * as productService from "../services/productServices.js";
import { Request, Response, NextFunction } from 'express';
import { ExistingProduct, ResponseData, UpdateProduct } from "../types";

import multer from "multer";

const storage = multer.diskStorage({
  destination: (req: Request, file, cb) => {
    cb(null, "./src/uploads");
  },
  filename: (req: Request, file, cb) => {
    // cb(null, ${Date.now()}-${file.originalname});
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

//Create Product-- only for Admin
export function createProduct(req: Request, res: Response, next: NextFunction) : void{
  console.log("req.body", req.body)

  if (req.file) {
    productService
      .createProduct({ ...req.body, images: req.file.filename })
      .then((data) => res.json(data))
      .catch((err) => next(err));
  } else {
    console.log("file is not found")
  }
}

export const uploadImage = upload.single("image");

export function getAllProducts(
  req: Request<{ page: number; limit: number}>,
  res: Response,
  next: NextFunction
) :void{
  console.log("bhitra gayo?");

  productService
    .getAllProducts()
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

//get product details

export function getProductDetails(
  req: Request<{ id: string }>,
  res: Response<ResponseData>,
  next: NextFunction
): void {
  console.log("id aunu paryo", req.params.id)
  productService
    .getProductDetails(req.params.id)
    .then((data: ResponseData) => res.json(data))
    .catch((err) => next(err));
}

//Update product  -- only for Admin

export function updateProduct(
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
):void {
  const body = req.body as UpdateProduct;
  productService
    .updateProduct(req.params.id, body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

//Delete Product

export function deleteProduct(
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) :void{
  console.log("req.body", req.params.id);
  productService
    .deleteProduct(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}
