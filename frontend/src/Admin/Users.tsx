import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import * as notify from "../utils/notify"
import "./admin.css";
import authHeader from '../authentication/authHeader.js';



interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}


const Users = () => {
  // const [users, setUsers] = useState("");
  // const [currentPage, setCurrentPage] = useState(1);
  // const [usersPerPage] = useState(5);
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/users`)
      .then((res) => res.json())
      .then((data) => {
        console.log("mathi", data);
        setUsers(data.data);
      });
  }, []);

  const Delete = (id:number) => {
    fetch(`${process.env.REACT_APP_API_URL}/users/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data.data);
        fetch(`${process.env.REACT_APP_API_URL}/users`)
          .then((res) => res.json())
          .then((data) => {
            if (!data.details) {
              console.log("ddd", data.data);
              setUsers(data.data);
              notify.success("deleted");
            } else {
              notify.error(data.details);
            }
          });
      })
      .catch((error) => {
        notify.error(error);
        console.error("Error:", error);
      });
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber:Number) =>  setCurrentPage(Number(pageNumber));

  return (
    <>
      {" "}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded">
        <Link to="/userRegister">Add Users</Link>
      </button>
      <table className="table-auto w-full text-center text-white bg-gray-800">
        <thead className="font-medium">
          <tr>
            <th className="px-4 py-2">Full Name</th>
            <th className="px-4 py-2">Username</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Edit</th>
            <th className="px-4 py-2">Delete</th>
          </tr>
        </thead>
        {users &&
          currentUsers.map((item, i) => {
            return (
              <>
                <tr key={item.id} className="hover:bg-gray-700">
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <button
                      type="button"
                     className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                      {" "}
                      <Link to={`../users/edit/${item.id}`}> Edit </Link>
                    </button>
                  </td>
                  <td>
                    {" "}
                    <button
                      type="button"
                     className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      onClick={() => {
                        Delete(item.id);
                      }}
                    >
                      {" "}
                      Delete{" "}
                    </button>
                  </td>
                </tr>
              </>
            );
          })}

        <div className="p-[10px]">
          <ul className="pagination">
            {Array.from(
              { length: Math.ceil(users.length / usersPerPage) },
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
                   
                   className ="page-link px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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

export default Users
