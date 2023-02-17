import Boom from "@hapi/boom";
import { AddUsers,LoginUsers,UpdateUsers } from "../types";
import Admin from "../models/admin"
import { hash, compare, createToken } from '../utils/crypt';

export interface ExistingUser {
  id?: number;
  name: string;
  password :string;
  username : string;
  email: string;
}

/**
 *
 * @param {Object} data - details of admin to save admin
 * @returns
 */

export async function saveAdmin(data :AddUsers) {
    const {name,username,password,email} =data as ExistingUser;
    const existingUser  = await new Admin().findByParams({name:name ,username:username,email:email}) as ExistingUser[];
    console.log("existing users",existingUser)
      if (existingUser) {
        throw Boom.badRequest("User already exist");
      }



  const hashedPassword = hash(password);

  const insertedData = await new Admin().save({
    name: name,
    username: username,
    email: email,
    password: hashedPassword,
  });

  return {
    data: insertedData,
    message: "Added Admin sucessfully",
  };
}

/**
 * Details of all admins
 *
 * @returns {Object} {data: returnedData ,message: 'Succesfully fetched all data'}
 */
export async function getAllAdmins() {
  const returnedData = await new Admin().getAll1() as ExistingUser[];

  return {
    data: returnedData,
    message: "Succesfully fetched all data",
  };
}

/**
 * Update data of Admin
 *
 * @param {Number} id - id to update data of admin
 * @param {Object} data - data that needs to be updated
 * @returns {Object}{data: returnedData,message: 'Succesfully updated admin'}
 */

export async function updateAdminById(id :number,data :UpdateUsers) {
    const returnedData = await new Admin().updateById(id,data) as ExistingUser[];

  return {
    data: returnedData,
    message: "Succesfully updated admin",
  };
}

/**
 * Deletion of admin by id
 *
 * @param {Number} id - id of admin to delete
 * @returns {Object} { data: 1,message: 'Succesfully deleted admin'}
 */
export async function deleteAdminById(id: number)  {
  const returnedData = await new Admin().removeById(id);

  return {
    data: returnedData,
    message: "Succesfully deleted admin",
  };
}

/**
 * Login validation and token generation.
 *
 * @param {Object} params - details for login
 * @return {Object}  { data: { token, user }, message: "Admin Logged in succesfully",};
 */

interface LoginUser {
  id: number;
  name: string;
  email: string;
  currentUser: string
}

export async function login(params:LoginUsers) {
    const { username, password } = params;

     if (!username || !password) {
       return {
         message: "Please enter username and password",
       };
          }

          const existingUser : any = await new Admin().findByParams({ username:username, password:password}) as ExistingUser[];

            if (existingUser) {
              throw Boom.badRequest("User already exist");
            }
    const doesPasswordMatch = compare(password , existingUser.password);
  
    if (!doesPasswordMatch) {
  
      throw new (Boom.badRequest as any)('Invalid credentials');
    }

    const user : LoginUser = {
      id: existingUser.id,
      name: existingUser.name,
      email: existingUser.email,
      currentUser: 'admin'
    };
  
    const token :string= createToken(user);

  return {
    data: { token, user },
    message: "Admin Logged in succesfully",
  };
}
