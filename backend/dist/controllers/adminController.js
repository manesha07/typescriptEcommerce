"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerAdmin = exports.login = exports.deleteAdmin = exports.updateAdmin = exports.getAllAdmins = exports.addAdmin = void 0;
const adminService = __importStar(require("../services/adminServices"));
/**
 * Controller to add admin.
 *
 * @param {express.Request} req - contains the data from the request body of admin details
 * @param {express.Response} res - send the response back to the client
 * @param {express.NextFunction} next - middleware function is called if err is thrown
 */
function addAdmin(req, res, next) {
    adminService.saveAdmin(req.body)
        .then((data) => res.status(200).json(data))
        .catch((err) => {
        next(err);
    });
}
exports.addAdmin = addAdmin;
/**
 * Controller to get details of all admins.
 *
 * @param {express.Request} req - contains the data from the request body of all admin details
 * @param {express.Response} res - send the response back to the client
 * @param {express.NextFunction} next  - middleware function is called if err is thrown
 */
//details of functions
function getAllAdmins(req, res, next) {
    adminService
        .getAllAdmins()
        .then((data) => res.json(data))
        .catch((err) => next(err));
}
exports.getAllAdmins = getAllAdmins;
/**
* Controller to update details of all admins.
*
* @param {express.Request} req - contains the data from the request body of updation of admin details
* @param {express.Response} res - send the response back to the client
* @param {express.NextFunction} next  - middleware function is called if err is thrown
*/
function updateAdmin(req, res, next) {
    // console.log("req",req.params.adminIdentifier,req.body)
    adminService.updateAdminById(req.params.adminIdentifier, req.body)
        .then((data) => res.json(data))
        .catch((err) => next(err));
}
exports.updateAdmin = updateAdmin;
/**
* Controller to delete admin.
*
* @param {express.Request} req - contains the data from the request body of deletion of admin details
* @param {express.Response} res - send the response back to the client
* @param {express.NextFunction} next  - middleware function is called if err is thrown
*/
function deleteAdmin(req, res, next) {
    adminService.deleteAdminById(req.params.adminIdentifier)
        .then((data) => res.json(data))
        .catch((err) => next(err));
}
exports.deleteAdmin = deleteAdmin;
/**
 * Controller for admin login.
 *
 * @param {express.Request} req - contains the data from the request body for login of admin
 * @param {express.Response} res - send the response back to the client
 * @param {express.NextFunction} next  - middleware function is called if err is thrown
 */
function login(req, res, next) {
    adminService
        .login(req.body)
        .then((data) => res.json(data))
        .catch((err) => next(err));
}
exports.login = login;
/**
* Controller for registerAdmin.
*
* @param {express.Request} req - contains the data from the request body for register of admin
* @param {express.Response} res - send the response back to the client
* @param {express.NextFunction} next  - middleware function is called if err is thrown
*/
function registerAdmin(req, res, next) {
    adminService
        .saveAdmin(req.body)
        .then((data) => res.json(data))
        .catch((err) => next(err));
}
exports.registerAdmin = registerAdmin;
//# sourceMappingURL=adminController.js.map