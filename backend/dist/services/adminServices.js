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
exports.login = exports.deleteAdminById = exports.updateAdminById = exports.getAllAdmins = exports.saveAdmin = void 0;
const boom_1 = __importDefault(require("@hapi/boom"));
const admin_1 = __importDefault(require("../models/admin"));
const crypt_1 = require("../utils/crypt");
/**
 *
 * @param {Object} data - details of admin to save admin
 * @returns
 */
function saveAdmin(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, username, password, email } = data;
        const existingUser = yield new admin_1.default().findByParams({ name: name, username: username, email: email });
        console.log("existing users", existingUser);
        if (existingUser) {
            throw boom_1.default.badRequest("User already exist");
        }
        const hashedPassword = (0, crypt_1.hash)(password);
        const insertedData = yield new admin_1.default().save({
            name: name,
            username: username,
            email: email,
            password: hashedPassword,
        });
        return {
            data: insertedData,
            message: "Added Admin sucessfully",
        };
    });
}
exports.saveAdmin = saveAdmin;
/**
 * Details of all admins
 *
 * @returns {Object} {data: returnedData ,message: 'Succesfully fetched all data'}
 */
function getAllAdmins() {
    return __awaiter(this, void 0, void 0, function* () {
        const returnedData = yield new admin_1.default().getAll1();
        return {
            data: returnedData,
            message: "Succesfully fetched all data",
        };
    });
}
exports.getAllAdmins = getAllAdmins;
/**
 * Update data of Admin
 *
 * @param {Number} id - id to update data of admin
 * @param {Object} data - data that needs to be updated
 * @returns {Object}{data: returnedData,message: 'Succesfully updated admin'}
 */
function updateAdminById(id, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const returnedData = yield new admin_1.default().updateById(id, data);
        return {
            data: returnedData,
            message: "Succesfully updated admin",
        };
    });
}
exports.updateAdminById = updateAdminById;
/**
 * Deletion of admin by id
 *
 * @param {Number} id - id of admin to delete
 * @returns {Object} { data: 1,message: 'Succesfully deleted admin'}
 */
function deleteAdminById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const returnedData = yield new admin_1.default().removeById(id);
        return {
            data: returnedData,
            message: "Succesfully deleted admin",
        };
    });
}
exports.deleteAdminById = deleteAdminById;
function login(params) {
    return __awaiter(this, void 0, void 0, function* () {
        const { username, password } = params;
        if (!username || !password) {
            return {
                message: "Please enter username and password",
            };
        }
        const existingUser = yield new admin_1.default().findByParams({ username: username, password: password });
        if (existingUser) {
            throw boom_1.default.badRequest("User already exist");
        }
        const doesPasswordMatch = (0, crypt_1.compare)(password, existingUser.password);
        if (!doesPasswordMatch) {
            throw new boom_1.default.badRequest('Invalid credentials');
        }
        const user = {
            id: existingUser.id,
            name: existingUser.name,
            email: existingUser.email,
            currentUser: 'admin'
        };
        const token = (0, crypt_1.createToken)(user);
        return {
            data: { token, user },
            message: "Admin Logged in succesfully",
        };
    });
}
exports.login = login;
//# sourceMappingURL=adminServices.js.map