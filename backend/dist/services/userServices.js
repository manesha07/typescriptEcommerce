"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.deleteUserById = exports.updateUserById = exports.getUserDetails = exports.getAllUsers = exports.saveUser = exports.registerUser = void 0;
const boom_1 = __importDefault(require("@hapi/boom"));
const user_1 = __importDefault(require("../models/user"));
function registerUser(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const existingUser = yield new user_1.default().findByParams(data);
        if (existingUser) {
            throw boom_1.default.badRequest("User already exist");
        }
        const insertedData = yield new user_1.default().save(data);
        return {
            data: insertedData,
            message: "Added User successfully",
        };
    });
}
exports.registerUser = registerUser;
function saveUser(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const existingUser = yield new user_1.default().findByParams(data);
        if (existingUser) {
            throw boom_1.default.badRequest("User already exist");
        }
        const insertedData = yield new user_1.default().save(data);
        return {
            data: insertedData,
            message: "Added User/customer sucessfully",
        };
    });
}
exports.saveUser = saveUser;
function getAllUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const returnedData = yield new user_1.default().getAll("1", "10");
        return {
            data: returnedData,
            message: "Succesfully fetched all data",
        };
    });
}
exports.getAllUsers = getAllUsers;
function getUserDetails(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const insertedData = yield new user_1.default().getById(id);
        if (!insertedData) {
            throw boom_1.default.badRequest("User not Found");
        }
        return {
            data: insertedData,
            message: "Find User sucessfully",
        };
    });
}
exports.getUserDetails = getUserDetails;
function updateUserById(id, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const oldData = yield new user_1.default().findByParams({ id: id });
        const updatedData = {
            name: data.name || oldData.name,
            email: data.email || oldData.email,
            username: data.username || oldData.username,
            password: data.password || oldData.password,
        };
        const returnedData = yield new user_1.default().updateById(id, updatedData);
        return {
            data: returnedData,
            message: "Succesfully updated user",
        };
    });
}
exports.updateUserById = updateUserById;
function deleteUserById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const returnedData = yield new user_1.default().removeById(id);
        return {
            data: returnedData,
            message: "Succesfully deleted customer/user",
        };
    });
}
exports.deleteUserById = deleteUserById;
/**
 * Login validation and token generation.
 *
 * @param {Object} params
 * @return {Object}
 */
function login(params) {
    return __awaiter(this, void 0, void 0, function* () {
        const existingUser = yield new user_1.default().findByParams(params);
        if (!existingUser) {
            throw new boom_1.default.badRequest("Invalid credentials");
        }
        const user = {
            id: existingUser.id,
            name: existingUser.name,
            email: existingUser.email,
            currentUser: "user",
        };
        return {
            data: user,
            message: "User/Customer Logged in succesfully",
        };
    });
}
exports.login = login;
// export async function saveCheckout(data: object) {
//   const insertedData = await new Checkout().save(data);
//   return {
//     data: insertedData,
//     message: "Added Checkout sucessfully",
//   };
// }
//# sourceMappingURL=userServices.js.map