
import * as adminService from "../services/adminServices"
import { Request, Response, NextFunction } from 'express';
import { AddUsers,UpdateUsers,LoginUsers } from "../types";
/**
 * Controller to add admin.
 *
 * @param {express.Request} req - contains the data from the request body of admin details
 * @param {express.Response} res - send the response back to the client
 * @param {express.NextFunction} next - middleware function is called if err is thrown
 */

export function addAdmin(req: Request, res: Response, next: NextFunction) {
    const body = req.body as AddUsers;
    adminService.saveAdmin(body)
    .then ((data) => res.status(200).json(data))
    .catch((err) => {
      next(err);
    });
}

/**
 * Controller to get details of all admins.
 *
 * @param {express.Request} req - contains the data from the request body of all admin details
 * @param {express.Response} res - send the response back to the client
 * @param {express.NextFunction} next  - middleware function is called if err is thrown
 */

//details of functions
export function getAllAdmins(req: Request, res: Response, next: NextFunction) {
  adminService
    .getAllAdmins()
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to update details of all admins.
 *
 * @param {express.Request} req - contains the data from the request body of updation of admin details
 * @param {express.Response} res - send the response back to the client
 * @param {express.NextFunction} next  - middleware function is called if err is thrown
 */

export function updateAdmin(
  req: Request<{ adminIdentifier: any }>,
  res: Response,
  next: NextFunction
): void {
    const body = req.body as UpdateUsers;
    adminService.updateAdminById(req.params.adminIdentifier,body)

    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to delete admin.
 *
 * @param {express.Request} req - contains the data from the request body of deletion of admin details
 * @param {express.Response} res - send the response back to the client
 * @param {express.NextFunction} next  - middleware function is called if err is thrown
 */
export function deleteAdmin(
  req: Request<{ adminIdentifier: number }>,
  res: Response,
  next: NextFunction
) {
  adminService
    .deleteAdminById(req.params.adminIdentifier)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller for admin login.
 *
 * @param {express.Request} req - contains the data from the request body for login of admin
 * @param {express.Response} res - send the response back to the client
 * @param {express.NextFunction} next  - middleware function is called if err is thrown
 */


export function login(req: Request, res: Response, next: NextFunction) {
    const body = req.body as LoginUsers;
    adminService
      .login(body)
      .then((data) => res.json(data))
      .catch((err) => next(err));
  }

/**
 * Controller for registerAdmin.
 *
 * @param {express.Request} req - contains the data from the request body for register of admin
 * @param {express.Response} res - send the response back to the client
 * @param {express.NextFunction} next  - middleware function is called if err is thrown
 */
export function registerAdmin(req: Request, res: Response, next: NextFunction) {
  adminService
    .saveAdmin(req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}
