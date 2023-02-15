import Boom from "@hapi/boom";
import Product from "../models/product";

export interface ProductData {
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  images: string;
}
//Create Product-- only for Admin
export async function createProduct(
  data: ProductData
): Promise<{ data: any; message: string }> {
  const insertedData = await new Product().save(data);

  return {
    data: insertedData,
    message: "Added Product successfully",
  };
}

//******************** Get all products ********************//
export async function getAllProducts(
  pageNumber: number = 1,
  itemsPerPage: number = 12
): Promise<{ data: any; message: string }> {
  const data = await new Product().getAll(pageNumber, itemsPerPage);
  if (!data) {
    throw Boom.badRequest("Product not Found");
  }
  console.log("Database bta data", data);
  return {
    data: data,
    message: "Find all Products successfully",
  };
}

// Get product details
export async function getProductDetails(
  id: number
): Promise<{ data: any; message: string }> {
  const insertedData = await new Product().getById(id);
  if (!insertedData) {
    throw Boom.badRequest("Product not Found");
  }
  return {
    data: insertedData,
    message: "Find Product successfully",
  };
}

// Update product -- only for Admin
export async function updateProduct(
  id: number,
  data: ProductData
): Promise<{ data: any; message: string }> {
  const oldData = await new Product().findByParams({ id: id });

  const updatedData: ProductData = {
    name: data.name || oldData.name,
    description: data.description || oldData.description,
    price: data.price || oldData.price,
    stock: data.stock || oldData.stock,
    category: data.category || oldData.category,
    images: data.images || oldData.images,
  };

  const insertedData = await new Product().updateById(id, updatedData);
  if (!insertedData) {
    throw Boom.badRequest("Product not Found");
  }
  return {
    data: insertedData,
    message: "Update Product successfully",
  };
}

// Delete product
export async function deleteProduct(
  id: number
): Promise<{ data: any; message: string }> {
  const returnedData = await new Product().removeById(id);

  return {
    data: returnedData,
    message: "Successfully deleted Product",
  };
}
