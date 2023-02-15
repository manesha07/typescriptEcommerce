import React from 'react'
import { useState} from 'react';
import { ToastContainer } from 'react-toastify';
import * as notify from "../utils/notify"
import { useParams } from 'react-router-dom';
import authHeader from '../authentication/authHeader';
import { Response } from 'src/typedeclaration';
import { RequestHeaders } from 'src/typedeclaration';

interface RegisterFormData {
name: string;
username: string;
password: string;
email: string;
}

const Register: React.FC = () => {
  const [fullname,setFullname] = useState("");
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [repassword,setRepassword] = useState("");
  const {id} =useParams();

  const headers: RequestHeaders = authHeader();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if(password !== repassword)
      {console.log("error")} 

  const formData: RegisterFormData = {
  name: fullname,
  username: username,
  password: password,
  email: email,
};

      fetch(`${process.env.REACT_APP_API_URL}/users/${id}`, {
        method: 'PUT', // or 'PUT'
        headers:headers as HeadersInit,
        body: JSON.stringify({name:fullname,username:username,password:password,email:email}),
      })
      .then((response) => response.json())
      .then((data : Response) => {
        if ("data" in data)  {
        if(data.data)
       { console.log('Success:', data);
        notify.success("Edited")}}
        else{
          notify.error(data.details)
        }
      })
        .catch((error : string) => {
          notify.error(error)
          console.error('Error:', error);
        });
    }

    return (
        <>
          <form onSubmit={handleSubmit} className="login shadow-xl mx-auto w-[300px]  p-[30px] mt-[40px] rounded-md">
            <h1 className="text-[30px] text-center mb-[20px]">Register</h1>
            <label htmlFor ="fullname" className='text-gray-600'> Full Name</label>
            <input  type="text" id="fullname" value={fullname || ""} placeholder="Enter fullname" onChange={(e)=>{setFullname(e.target.value)}} className="shadow-md p-[5px] w-full mb-[20px] mt-[10px] rounded-md"/>
            <label htmlFor ="username" className='text-gray-600'> Email</label>
            <input  type="email" id="email" value={email||""} placeholder="Enter Email" onChange={(e)=>{setEmail(e.target.value)}} className="shadow-md p-[5px] w-full mb-[20px] mt-[10px] rounded-md"/>
            <label htmlFor ="email" className='text-gray-600'> Username</label>
            <input  type="text" id="username" value={username||""} placeholder="Enter Username" onChange={(e)=>{setUsername(e.target.value)}} className="shadow-md p-[5px] w-full mb-[20px] mt-[10px] rounded-md"/>
            <label htmlFor ="password" className='text-gray-600'>Password</label>
            <input type="password" id="password" value={password||""} placeholder="Enter Password" onChange={(e)=>{setPassword(e.target.value)}} className="shadow-md p-[5px] w-full mb-[20px] mt-[10px] rounded-md" />
            <label htmlFor ="repassword" className='text-gray-600'>Repeat Password</label>
            <input type="password" id="repassword" value={repassword||""} placeholder="Enter Password Again" onChange={(e)=>{setRepassword(e.target.value)}} className="shadow-md p-[5px] w-full mb-[20px] mt-[10px] rounded-md" />
            <button type="submit" className="shadow-md p-[5px] w-full mb-[20px] mt-[10px] text-white rounded-md bg-green-600">REGISTER</button>
          </form>
          <ToastContainer autoClose={4000}/>
          </>
    )
}

export default Register