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
exports.deleteProduct = exports.updateProduct = exports.getProductDetails = exports.getAllProducts = exports.createProduct = void 0;
const boom_1 = __importDefault(require("@hapi/boom"));
const product_1 = __importDefault(require("../models/product"));
//Create Product-- only for Admin
function createProduct(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const insertedData = yield new product_1.default().save(data);
        console.log("inserted data", insertedData);
        return {
            data: insertedData,
            message: "Added Product successfully",
        };
    });
}
exports.createProduct = createProduct;
//******************** Get all products ********************//
function getAllProducts(pageNumber = 1, itemsPerPage = 12) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield new product_1.default().getAll(pageNumber, itemsPerPage);
        if (!data) {
            throw boom_1.default.badRequest("Product not Found");
        }
        return {
            data: data,
            message: "Find all Products successfully",
        };
    });
}
exports.getAllProducts = getAllProducts;
// Get product details
function getProductDetails(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const insertedData = yield new product_1.default().getById(id);
        if (!insertedData) {
            throw boom_1.default.badRequest("Product not Found");
        }
        return {
            data: insertedData,
            message: "Find Product successfully",
        };
    });
}
exports.getProductDetails = getProductDetails;
//Update product -- only for Admin
function updateProduct(id, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const oldData = yield new product_1.default().findByParams({ id: id });
        const updatedData = {
            name: data.name || oldData.name,
            description: data.description || oldData.description,
            price: data.price || oldData.price,
            stock: data.stock || oldData.stock,
            category: data.category || oldData.category,
            images: data.images || oldData.images,
        };
        const insertedData = yield new product_1.default().updateById(id, updatedData);
        if (!insertedData) {
            throw boom_1.default.badRequest("Product not Found");
        }
        return {
            data: insertedData,
            message: "Update Product successfully",
        };
    });
}
exports.updateProduct = updateProduct;
// Delete product
function deleteProduct(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const returnedData = yield new product_1.default().removeById(id);
        return {
            data: returnedData,
            message: "Successfully deleted Product",
        };
    });
}
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=productServices.js.map