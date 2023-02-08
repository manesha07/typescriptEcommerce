import * as adminService from "../services/adminServices.js"
/**
 * Controller to add admin.
 *
 * @param {express.Request} req - contains the data from the request body of admin details
 * @param {express.Response} res - send the response back to the client
 * @param {express.NextFunction} next - middleware function is called if err is thrown
 */
export function addAdmin(req, res, next) {
    adminService.saveAdmin(req.body)
    .then ((data) => res.status(200).json(data))
    .catch((err) => {
    next(err)}); 
}

/**
 * Controller to get details of all admins.
 *
 * @param {express.Request} req - contains the data from the request body of all admin details
 * @param {express.Response} res - send the response back to the client
 * @param {express.NextFunction} next  - middleware function is called if err is thrown
 */

//details of functions
export function getAllAdmins(req, res, next) {
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
export function updateAdmin (req,res,next) {
    // console.log("req",req.params.adminIdentifier,req.body)
    adminService.updateAdminById(req.params.adminIdentifier,req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err))
}

  /**
 * Controller to delete admin.
 *
 * @param {express.Request} req - contains the data from the request body of deletion of admin details
 * @param {express.Response} res - send the response back to the client
 * @param {express.NextFunction} next  - middleware function is called if err is thrown
 */
export function deleteAdmin (req,res,next) {
    adminService.deleteAdminById(req.params.adminIdentifier)
    .then((data) => res.json(data))
    .catch((err) => next(err))
}

/**
 * Controller for admin login.
 *
 * @param {express.Request} req - contains the data from the request body for login of admin
 * @param {express.Response} res - send the response back to the client
 * @param {express.NextFunction} next  - middleware function is called if err is thrown
 */
export function login(req, res, next) {
    adminService
      .login(req.body)
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
export function registerAdmin(req,res,next) {
    adminService
    .saveAdmin(req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

