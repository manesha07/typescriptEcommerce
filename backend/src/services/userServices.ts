import Boom from "@hapi/boom";

import User from "../models/user"
import Checkout from "../models/checkout.js";
import { hash, compare, createToken } from '../utils/crypt';

export async function registerUser(data :object) {
    const existingUser = await new User().findByParams(data);
    if (existingUser) {
        throw Boom.badRequest('User already exist');
    }

    const insertedData = await new User().save(data);

    return {
        data: insertedData,
        message: 'Added User successfully',
    }
}

export async function saveUser(data : object) {

    const existingUser = await new User().findByParams(data);
    if (existingUser) {
        throw Boom.badRequest('User already exist');
    }

    const insertedData = await new User().save(data);

    return {
        data: insertedData,
        message: 'Added User/customer sucessfully'
    }
}

export async function getAllUsers(pageNumber = 1, itemsPerPage = 10) {
  const returnedData = await new User().getAll(pageNumber, itemsPerPage);

  return {
    data: returnedData,
    message: "Succesfully fetched all data",
  };
}

export async function getUserDetails(id :number) {
    const insertedData = await new User().getById(id);
    if (!insertedData) {
      throw Boom.badRequest("User not Found");
    }
    return {
      data: insertedData,
      message: "Find User sucessfully",
    };
  }
  

export async function updateUserById(id :number,data :any) {
  const oldData = await new User().findByParams({id:id});

  const updatedData = {
    name:data.name  || oldData.name,
    email:data.email || oldData.email,
    username:data.username || oldData.username,
    password:data.password || oldData.password,
}
    const returnedData = await new User().updateById(id,updatedData);

    return {
        data: returnedData,
        message: 'Succesfully updated user'
    }
}

export async function deleteUserById(id:number) {
    const returnedData = await new User().removeById(id);

    return {
        data: returnedData,
        message: 'Succesfully deleted customer/user'
    }
}

/**
 * Login validation and token generation.
 *
 * @param {Object} params
 * @return {Object}
 */
export async function login(params :object) {
    const existingUser = await new User().findByParams(params);
    if (!existingUser) {
   
      throw new (Boom.badRequest as any)('Invalid credentials') ;
    }
     
    const user = {
      id: existingUser.id,
      name: existingUser.name,
      email: existingUser.email,
      currentUser: 'user'
    };
  
    return {
      data: { user },
      message: 'User/Customer Logged in succesfully',
    };
  }




  export async function saveCheckout(data :object) {

    const insertedData = await new Checkout().save(data);

    return {
      data: insertedData,
      message: "Added Checkout sucessfully",
    };
  }
 
