import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import * as notify from "../utils/notify";
import axios from "axios";
import { Response } from "src/typedeclaration";
import { FormEvent } from "react";

const AddProduct: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  //   const [formData, setFormData] = useState({
  //   name: '',
  //   price: 0,
  //   description: '',
  // });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("category", category);
    formData.append("image", image!);
    const adminToken = JSON.parse(localStorage.getItem("token") || "[]");

    axios
      .post(`${process.env.REACT_APP_API_URL}/products`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${adminToken}`,
        },
      })
      .then((response) => {
        console.log("response data", response.data);
        return response.data;
      })
      .then((data: Response) => {
        if ("data" in data) {
          if (data.data) {
            notify.success("Added");
          }
        } else {
          notify.error(data.details);
        }
      })
      .catch((error) => {
        notify.error(error);
        console.error(error);
      });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="shadow-xl mx-auto w-[300px] p-[30px] mt-[40px] rounded-md"
      >
        <h1 className="text-[30px] text-center mb-[20px]">Add Product</h1>

        <label htmlFor="title" className="text-gray-600">
          Product Name
        </label>
        <input
          type="text"
          name="title"
          placeholder={"Product Name"}
          value={title || ""}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label htmlFor="description" className="text-gray-600">
          {" "}
          Product Description
        </label>
        <input
          type="text"
          name="description"
          placeholder={"Description"}
          value={description || ""}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        {/* <div>
          <label for="image" className="text-gray-600">
            {" "}
            Product Image
          </label>
          <input
            type="text"
            name="image"
            placeholder={"image"}
            value={image || ""}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </div> */}

        <div>
          <label htmlFor="image" className="text-gray-600">
            Product Image
          </label>
          <input type="file" name="image" onChange={handleImageChange} />
        </div>

        <div>
          <label htmlFor="price" className="text-gray-600">
            {" "}
            Product Price
          </label>
          <input
            type="number"
            name="price"
            placeholder={"Price"}
            value={price || ""}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="category" className="text-gray-600">
            {" "}
            Product Category
          </label>
          <input
            type="text"
            name="category"
            placeholder={"Category"}
            value={category || ""}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="stock" className="text-gray-600">
            {" "}
            Product Stock
          </label>
          <input
            type="number"
            name="stock"
            placeholder={"Stock"}
            value={stock || ""}
            onChange={(e) => {
              setStock(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          className="shadow-md p-[5px] w-full mb-[20px] mt-[10px] text-white rounded-md bg-green-600"
        >
          Submit
        </button>
      </form>
      <ToastContainer autoClose={4000} />
    </>
  );
};

export default AddProduct;
