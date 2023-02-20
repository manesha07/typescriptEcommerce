import * as userService from "../services/userServices.js"
import { Request, Response, NextFunction } from 'express';
import { AddUsers,UpdateUsers,LoginUsers } from "../types";

export function registerUser(req: Request, res: Response, next: NextFunction) :void{
  const body = req.body as AddUsers;  
  userService
    .registerUser(body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

export function addUser(req: Request, res: Response, next: NextFunction) :void{
  userService
    .saveUser(req.body)
    .then((data) => res.status(200).json(data))
    .catch((err) => {
      next(err);
    });
}

// export function checkoutUser(req: Request, res: Response, next: NextFunction) {
//   const { name, email, phone, address } = req.body;
//   userService
//     .saveCheckout(req.body)
//     .then((data) => res.json(data))
//     .catch((err) => next(err));
// }

/**
 * Controller to get details of all Users.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function getAllUsers(
  req: Request,
  res: Response,
  next: NextFunction
) :void{
  userService
    .getAllUsers()
      .then((data) => res.json(data))
      .catch((err) => next(err));
  }

export function getUserDetails(
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) :void{
  const user = req.params.id;
  userService
    .getUserDetails(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

export function updateUser(
  req: Request<{ userIdentifier: string }>,
  res: Response,
  next: NextFunction
):void {
  const body = req.body as UpdateUsers;
    userService.updateUserById(req.params.userIdentifier,body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

export function deleteUser(
  req: Request<{ userIdentifier: string }>,
  res: Response,
  next: NextFunction
) :void{
  userService
    .deleteUserById(req.params.userIdentifier)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller for User login.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function login(req: Request, res: Response, next: NextFunction):void {
  const body = req.body as LoginUsers;
    userService
      .login(body)
      .then((data) => res.json(data))
      .catch((err) => next(err));
  }