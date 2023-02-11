import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import * as userServices from "../services/index.js";

const DetailUser = () => {
  const { id } = useParams();
  console.log("this is iddetail user", id);
  const [users, setUsers] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/users/${id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log("this", res);
        setUsers(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      
      {users && (
        <div className="rounded-md shadow-2xl mt-[20px]">
          <div className="user flex flex-row ">
            <div className="description ml-[20px]">
              <h1 className="text-[40px]">{users.name}</h1>
              <p>{users.username}</p>
              <p className="text-orange-500">{users.email}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailUser;
