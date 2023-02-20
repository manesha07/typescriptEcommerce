import Boom from "@hapi/boom";
import Product from "../models/product";
import { ExistingProduct ,UpdateProduct,ProductData} from "../types";


//Create Product-- only for Admin
export async function createProduct(
  data: ProductData
): Promise<{ data: ExistingProduct[]; message: string }> {
  const insertedData = await new Product().save(data) as ExistingProduct[];
console.log("inserted data",insertedData)
  return {
    data: insertedData,
    message: "Added Product successfully",
  };
}

//******************** Get all products ********************//
export async function getAllProducts(): Promise<{ data: object; message: string }> {

const data = await new Product().getAll("1", "12");
if (!data) {
throw Boom.badRequest("Product not Found");
}
return {
data: data,
message: "Find all Products successfully",
};
}

// Get product details
export async function getProductDetails(id: string): Promise<{ data:ExistingProduct; message: string }> {
const insertedData = await new Product().getById(id) as ExistingProduct;
console.log("productservices getbyid", insertedData)
if (!insertedData) {
throw Boom.badRequest("Product not Found");
}
return {
data: insertedData,
message: "Find Product successfully",
};
}

//Update product -- only for Admin
export async function updateProduct(
  id: string,
  data: UpdateProduct
): Promise<{ data: ExistingProduct; message: string }> {
  const oldData = await new Product().findByParams({ id: id }) as ExistingProduct;

  const updatedData: ProductData = {
    name: data.name || oldData.name,
    description: data.description || oldData.description,
    price: data.price || oldData.price,
    stock: data.stock || oldData.stock,
    category: data.category || oldData.category,
    images: data.images || oldData.images,
  };

  const insertedData = await new Product().updateById(id, updatedData) as ExistingProduct;
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
  id: string
): Promise<{ data:number | null; message: string }> {
  const returnedData = await new Product().removeById(id);

  return {
    data: returnedData,
    message: "Successfully deleted Product",
  };
}
