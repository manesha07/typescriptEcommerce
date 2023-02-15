import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import * as notify from "../utils/notify"
import authHeader from '../authentication/authHeader';
import { ProductType, Response ,RequestHeaders} from 'src/typedeclaration';

const Products: React.FC = () => {
 const [products, setProducts] = useState<ProductType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage] = useState<number>(5);

  const headers: RequestHeaders = authHeader();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/products`)
      .then((res) => res.json())
      .then((data : Response) => {
        console.log("ddd", data);
        if ("data" in data) {
        setProducts(data.data);}
      });
  }, []);

  const Delete = (id : Number) => {
    fetch(`${process.env.REACT_APP_API_URL}/products/${id}`, {
      method: "DELETE",
      headers : headers as HeadersInit,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        fetch(`${process.env.REACT_APP_API_URL}/products`)
          .then((res) => res.json())
          .then((data : Response) => {
            console.log("ddd", data);
            if ("data" in data) {
            if (data.data) {
              setProducts(data.data);
              notify.success("deleted");
            } }else {
              notify.error(data.details);
            }
          });
      })
      .catch((error) => {
        notify.error(error);
        console.error("Error:", error);
      });
  };

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber:Number) =>  setCurrentPage(Number(pageNumber));

  
  return (
    <>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded">
        <Link to="/addproduct">Add Product</Link>
      </button>
      <table className="table-auto w-full text-center text-white bg-gray-800">
        <thead className="font-medium">
          <tr>
            <th className="px-4 py-2">Product Image</th>
            <th className="px-4 py-2">Product Name</th>
            <th className="px-4 py-2">Product Description</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Stock</th>
            <th className="px-4 py-2">Edit</th>
            <th className="px-4 py-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            currentProducts.map((item) => {
              return (
                <tr key={item.i} className="hover:bg-gray-700">
                  <td className="border px-9 py-5">
                    <img
          
                      src={process.env.REACT_APP_API_URL+'/uploads/'+item.images}
                      alt={item.id + "img"}
                      className="h-12 w-12 object-cover rounded-full"
                    />
                  </td>
                  <td className="border px-4 py-2">{item.name}</td>
                  <td className="border px-4 py-2">{item.description}</td>
                  <td className="border px-4 py-2">{item.price}</td>
                  <td className="border px-4 py-2">{item.stock}</td>
                  <td className="border px-4 py-2">
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                      <Link to={`../products/edit/${item.id}`}> Edit </Link>
                    </button>
                  </td>
                  <td className="border px-4 py-2">
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      onClick={() => {
                        Delete(item.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
        <div className="p-[10px]">
          <ul className="pagination">
            {Array.from(
              { length: Math.ceil(products.length / productsPerPage) },
              (_, i) => (
                <li
                  key={i}
                  className={`page-item ${
                    i + 1 === currentPage ? "bg-blue-500" : ""
                  }p-2`}
                  style={{ display: "inline-block", marginRight: "10px" }}
                >
                  <button
                    onClick={() => paginate(i + 1)}
               
                    className="page-link px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    {i + 1}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
      </table>
      <ToastContainer autoClose={4000} />
    </>
  );
}

export default Products