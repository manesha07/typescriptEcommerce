import test from "ava";
import sinon from "sinon";
import Product from "../models/product.js";
import {
  getAllProducts,
  createProduct,
  deleteProduct,
  getProductDetails,
  updateProduct,
} from "./productServices.js";

//getAllProduct should return stubbed data
test.serial("getAllProduct should return stubbed data", async (t) => {
  const mockData = [
    { id: 1, name: "Product1" },
    { id: 2, name: " Product2" },
  ];
  const stub = sinon.stub(Product.prototype, "getAll").returns(
    Promise.resolve([
      { id: 1, name: "Product1" },
      { id: 2, name: " Product2" },
    ])
  );

  const result = await getAllProducts();
  t.deepEqual(result, {
    data: mockData,
    message: "Find all Products sucessfully",
  });

  stub.restore();
});

//Create Product

test.serial("registerUser returns success for valid data", async (t) => {
  const data1 = {
    name: "Mobile",

    stock: "123",
  };
  const stub = sinon.stub(Product.prototype, "save");
  stub.withArgs(data1).returns(Promise.resolve(data1));
  stub.withArgs(1).returns(Promise.resolve(1));

  const result = await createProduct(data1);
  console.log(result);
  t.deepEqual(result, { data: data1, message: "Added Product sucessfully" });
});

//Delete Product

test.serial("deleteProduct should return stubbed data", async (t) => {
  const stub = sinon.stub(Product.prototype, "removeById");
  stub.withArgs(1).returns(Promise.resolve(1));
  stub.withArgs(3).returns(3);

  const result = await deleteProduct(1);
  t.deepEqual(result, {
    data: 1,
    message: "Succesfully deleted Product",
  });

  stub.restore();
});

//get product details

test.serial("get product details should return stubbed data", async (t) => {
  const stub = sinon.stub(Product.prototype, "getById");
  stub.withArgs(1).returns(Promise.resolve(1));
  stub.withArgs(3).returns(3);
  //  console.log("tt",stub.calledWith(3));

  const result = await getProductDetails(1);
  t.deepEqual(result, {
    data: 1,
    message: "Find Product sucessfully",
  });

  stub.restore();
});

//UpdateAllProduct should return stubbed data
// test.serial("Updated should return stubbed data", async (t) => {
//   const mockData = [
//     { id: 1, name: "Product1" },

//   ];
//   const stub = sinon
//     .stub(Product.prototype, "findByParams")
//     .returns(Promise.resolve([{ id: 1, name: "Product1" }

// ]));

//   const newd = [{ id: 1, name: "Product1hehe" }];

//   const result = await updateProduct(1, newd);
//   t.deepEqual(result, {
//     data: mockData,
//     message: "Update Product sucessfully",
//   });

//   stub.restore();
// });

test.serial("updateProductById should return updated data", async (t) => {
  const mockData = {
    name: "12product name",
    description: "12product description",
    price: 100,
    stock: 10,
    category: "product category",
    images: "image1.jpg",
  };
  const stub1 = sinon.stub(Product.prototype, "findByParams");
  stub1.withArgs({ id: 1 }).returns(Promise.resolve(mockData));

  stub1.restore();

  const stub = sinon.stub(Product.prototype, "updateById");
  stub.withArgs(1, mockData).returns(
    Promise.resolve({
      name: "name",
      description: "description",
      price: 100,
      stock: 10,
      category: "category",
      images: "image1.jpg",
    })
  );

  const result = await updateProduct(1, mockData);
  t.deepEqual(result, {
    data: {
      name: "name",
      description: "description",
      price: 100,
      stock: 10,
      category: "category",
      images: "image1.jpg",
    },
    message: "Update Product sucessfully",
  });

  stub.restore();
});
