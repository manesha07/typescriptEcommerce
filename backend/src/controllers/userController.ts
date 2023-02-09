import * as userService from "../services/userServices.js"
import { Request, Response, NextFunction } from 'express';
export function registerUser(req: Request, res: Response, next: NextFunction) {
    userService
    .registerUser(req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

export function addUser(req: Request, res: Response, next: NextFunction) {
    userService.saveUser(req.body)
    .then ((data) => res.status(200).json(data))
    .catch((err) => {
    next(err)}); 
}

export function checkoutUser(req: Request, res: Response, next: NextFunction) {
  const { name, email,phone,address} = req.body;
  userService
    .saveCheckout(req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}


/**
 * Controller to get details of all Users.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function getAllUsers(req: Request<{page: any,limit:any}>, res: Response, next: NextFunction) {
    const pageNumber :any = req.query.page || 1;
    const itemsPerPage :any= req.query.limit || 10;
    userService
      .getAllUsers(pageNumber, itemsPerPage)
      .then((data) => res.json(data))
      .catch((err) => next(err));
  }

  export function getUserDetails(req: Request<{id: number}>, res: Response, next: NextFunction) {
    const user = req.params.id;
    userService
      .getUserDetails(req.params.id)
      .then((data) => res.json(data))
      .catch((err) => next(err));
  }

export function updateUser (req: Request<{userIdentifier: any}>, res: Response, next: NextFunction) {
    userService.updateUserById(req.params.userIdentifier,req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err))
}

export function deleteUser (req:  Request<{userIdentifier: any}>, res: Response, next: NextFunction) {
    userService.deleteUserById(req.params.userIdentifier)
    .then((data) => res.json(data))
    .catch((err) => next(err))
}

/**
 * Controller for User login.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function login(req: Request, res: Response, next: NextFunction) {
    userService
      .login(req.body)
      .then((data) => res.json(data))
      .catch((err) => next(err));
  }





