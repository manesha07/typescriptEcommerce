import Boom from "@hapi/boom";

import User from "../models/user";
import { ExistingUser,UpdateUsers,UserType } from "../types";

export async function registerUser(data: object) :Promise<{data:ExistingUser,message:string}> {
  const existingUser = await new User().findByParams(data);
  if (existingUser) {
    throw Boom.badRequest("User already exist");
  }

  const insertedData = await new User().save(data);

  return {
    data: insertedData as ExistingUser,
    message: "Added User successfully",
  };
}

export async function saveUser(data: object) :Promise<{data:ExistingUser,message:string}>{
  const existingUser = await new User().findByParams(data);
  if (existingUser) {
    throw Boom.badRequest("User already exist");
  }

  const insertedData = await new User().save(data);

  return {
    data: insertedData as ExistingUser,
    message: "Added User/customer sucessfully",
  };
}

export async function getAllUsers():Promise<{data:ExistingUser[],message:string}> {
  const returnedData = await new User().getAll("1", "10");

  return {
    data: returnedData as ExistingUser[],
    message: "Succesfully fetched all data",
  };
}

export async function getUserDetails(id: string):Promise<{data:ExistingUser,message:string}> {
  const insertedData = await new User().getById(id);
  if (!insertedData) {
    throw Boom.badRequest("User not Found");
  }
  return {
    data: insertedData as ExistingUser,
    message: "Find User sucessfully",
  };
}

export async function updateUserById(id: string, data: UpdateUsers ):Promise<{data:ExistingUser,message:string}> {
  const oldData = await new User().findByParams({ id: id }) as ExistingUser;

  const updatedData = {
    name: data.name || oldData.name,
    email: data.email || oldData.email,
    username: data.username || oldData.username,
    password: data.password || oldData.password,
  };
  const returnedData = await new User().updateById(id, updatedData);

  return {
    data: returnedData as ExistingUser,
    message: "Succesfully updated user",
  };
}

export async function deleteUserById(id: string):Promise<{data:number,message:string}> {
  const returnedData = await new User().removeById(id);

  return {
    data: returnedData as number,
    message: "Succesfully deleted customer/user",
  };
}

/**
 * Login validation and token generation.
 *
 * @param {Object} params
 * @return {Object}
 */


export async function login(params: object):Promise<{data:UserType,message:string}> {
  const existingUser = await new User().findByParams(params) as ExistingUser;
  if (!existingUser) {
    throw new (Boom.badRequest as any)("Invalid credentials");
  }

  const user = {
    id: existingUser.id,
    name: existingUser.name,
    email: existingUser.email,
    currentUser: "user",
  };

  return {
    data: user as UserType ,
    message: "User/Customer Logged in succesfully",
  };
}

// export async function saveCheckout(data: object) {
//   const insertedData = await new Checkout().save(data);

//   return {
//     data: insertedData,
//     message: "Added Checkout sucessfully",
//   };
// }
