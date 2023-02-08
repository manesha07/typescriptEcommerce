import Boom from "@hapi/boom";

import Product from "../models/product.js";

//Create Product-- only for Admin
export async function createProduct(data) {
  const insertedData = await new Product().save(data);

  return {
    data: insertedData,
    message: "Added Product sucessfully",
  };
}

// //********************     Get all products   ********************//
// export async function getAllProducts() {
//   const data = await new Product().getAll();
//   console.log("data ayauiuaia",data)
//   if (!data) {
//     console.log("Product not Found");
//     throw Boom.badRequest("Product not Found");
//   }
//   return {
//     data: data,
//     message: "Find all  Products sucessfully",
//   };
// }

//******************** Get all products ********************//
export async function getAllProducts(pageNumber = 1, itemsPerPage = 12) {
const data = await new Product().getAll(pageNumber, itemsPerPage);
if (!data) {
throw Boom.badRequest("Product not Found");
}
return {
data: data,
message: "Find all Products sucessfully",
};
}

//get product details
export async function getProductDetails(id) {
  const insertedData = await new Product().getById(id);
  if (!insertedData) {
    throw Boom.badRequest("Book not Found");
  }
  return {
    data: insertedData,
    message: "Find Product sucessfully",
  };
}

//Update product  -- only for Admin
export async function updateProduct(id, data) {
  const oldData = await new Product().findByParams({id:id});

  const updatedData = {
    name:data.name || oldData.name,
    description:data.description || oldData.description,
    price:data.price || oldData.price,
    stock:data.stock || oldData.stock,
    category:data.category || oldData.category,
    images:data.images || oldData.image}

  const insertedData = await new Product().updateById(id, updatedData);
  if (!insertedData) {
    throw Boom.badRequest("Book/product not Found");
  }
  return {
    data: insertedData,
    message: "Update Product sucessfully",
  };
}

//Delete Product
export async function deleteProduct(id) {
  const returnedData = await new Product().removeById(id);
 
  return {
    data: returnedData,
    message: "Succesfully deleted Product",
  };
}