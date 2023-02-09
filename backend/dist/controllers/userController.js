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
exports.login = exports.deleteUser = exports.updateUser = exports.getUserDetails = exports.getAllUsers = exports.checkoutUser = exports.addUser = exports.registerUser = void 0;
const userService = __importStar(require("../services/userServices.js"));
function registerUser(req, res, next) {
    userService
        .registerUser(req.body)
        .then((data) => res.json(data))
        .catch((err) => next(err));
}
exports.registerUser = registerUser;
function addUser(req, res, next) {
    userService.saveUser(req.body)
        .then((data) => res.status(200).json(data))
        .catch((err) => {
        next(err);
    });
}
exports.addUser = addUser;
function checkoutUser(req, res, next) {
    const { name, email, phone, address } = req.body;
    userService
        .saveCheckout(req.body)
        .then((data) => res.json(data))
        .catch((err) => next(err));
}
exports.checkoutUser = checkoutUser;
/**
 * Controller to get details of all Users.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
function getAllUsers(req, res, next) {
    const pageNumber = req.query.page || 1;
    const itemsPerPage = req.query.limit || 10;
    userService
        .getAllUsers(pageNumber, itemsPerPage)
        .then((data) => res.json(data))
        .catch((err) => next(err));
}
exports.getAllUsers = getAllUsers;
function getUserDetails(req, res, next) {
    const user = req.params.id;
    userService
        .getUserDetails(req.params.id)
        .then((data) => res.json(data))
        .catch((err) => next(err));
}
exports.getUserDetails = getUserDetails;
function updateUser(req, res, next) {
    userService.updateUserById(req.params.userIdentifier, req.body)
        .then((data) => res.json(data))
        .catch((err) => next(err));
}
exports.updateUser = updateUser;
function deleteUser(req, res, next) {
    userService.deleteUserById(req.params.userIdentifier)
        .then((data) => res.json(data))
        .catch((err) => next(err));
}
exports.deleteUser = deleteUser;
/**
 * Controller for User login.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
function login(req, res, next) {
    userService
        .login(req.body)
        .then((data) => res.json(data))
        .catch((err) => next(err));
}
exports.login = login;
//# sourceMappingURL=userController.js.map