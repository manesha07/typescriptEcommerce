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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// import * as bookController from "./controllers/books.js"
const adminController = __importStar(require("./controllers/adminController.js"));
const userController = __importStar(require("./controllers/userController.js"));
const productController = __importStar(require("./controllers/productController.js"));
const addAdmin_js_1 = __importDefault(require("./schemas/addAdmin.js"));
const addUser_js_1 = __importDefault(require("./schemas/addUser.js"));
const addProduct_js_1 = __importDefault(require("./schemas/addProduct.js"));
const editProduct_js_1 = __importDefault(require("./schemas/editProduct.js"));
const editUser_js_1 = __importDefault(require("./schemas/editUser.js"));
const editAdmin_js_1 = __importDefault(require("./schemas/editAdmin.js"));
const validation_js_1 = require("./middleware/validation.js");
const authenticate_js_1 = __importDefault(require("./middleware/authenticate.js"));
const dotenv = __importStar(require("dotenv"));
dotenv.config({ path: '.env' });
console.log("router", process.env.PORT);
const router = (0, express_1.Router)();
router.get('/', adminController.getAllAdmins);
router.post('/login', adminController.login);
router.post('/register', (0, validation_js_1.validateBody)(addAdmin_js_1.default), adminController.registerAdmin);
router.put('/:adminIdentifier', (0, validation_js_1.validateBody)(editAdmin_js_1.default), adminController.updateAdmin);
router.delete('/:adminIdentifier', adminController.deleteAdmin);
router.post('/userLogin', userController.login);
router.post('/userRegister', (0, validation_js_1.validateBody)(addUser_js_1.default), userController.registerUser);
router.get("/users", userController.getAllUsers);
router.put('/users/:userIdentifier', authenticate_js_1.default, (0, validation_js_1.validateBody)(editUser_js_1.default), userController.updateUser);
router.delete('/users/:userIdentifier', authenticate_js_1.default, userController.deleteUser);
router.get("/users/:id", userController.getUserDetails);
router.post("/userRegister/checkout", userController.checkoutUser);
router.get("/products", productController.getAllProducts);
router.post("/products", authenticate_js_1.default, (0, validation_js_1.validateBody)(addProduct_js_1.default), productController.createProduct);
router.get("/products/:id", productController.getProductDetails);
router.put("/products/:id", authenticate_js_1.default, (0, validation_js_1.validateBody)(editProduct_js_1.default), productController.updateProduct);
router.delete("/products/:id", authenticate_js_1.default, productController.deleteProduct);
router.get("/cart", productController.deleteProduct);
exports.default = router;
//# sourceMappingURL=routes.js.map