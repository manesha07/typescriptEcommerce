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
exports.deleteProduct = exports.updateProduct = exports.getProductDetails = exports.getAllProducts = exports.uploadImage = exports.createProduct = void 0;
const productService = __importStar(require("../services/productServices.js"));
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./src/uploads");
    },
    filename: (req, file, cb) => {
        // cb(null, ${Date.now()}-${file.originalname});
        cb(null, file.originalname);
    },
});
const upload = (0, multer_1.default)({ storage: storage });
//Create Product-- only for Admin
function createProduct(req, res, next) {
    console.log("req.body", req.body);
    if (req.file) {
        productService
            .createProduct(Object.assign(Object.assign({}, req.body), { images: req.file.filename }))
            .then((data) => res.json(data))
            .catch((err) => next(err));
    }
    else {
        console.log("file is not found");
    }
}
exports.createProduct = createProduct;
exports.uploadImage = upload.single("image");
function getAllProducts(req, res, next) {
    console.log("bhitra gayo?");
    const pageNumber = req.query.page || 1;
    const itemsPerPage = req.query.limit || 10;
    productService
        .getAllProducts(pageNumber, itemsPerPage)
        .then((data) => res.json(data))
        .catch((err) => next(err));
}
exports.getAllProducts = getAllProducts;
//get product details
function getProductDetails(req, res, next) {
    const product = req.params.id;
    productService
        .getProductDetails(req.params.id)
        .then((data) => res.json(data))
        .catch((err) => next(err));
}
exports.getProductDetails = getProductDetails;
//Update product  -- only for Admin
function updateProduct(req, res, next) {
    const body = req.body;
    productService
        .updateProduct(req.params.id, body)
        .then((data) => res.json(data))
        .catch((err) => next(err));
}
exports.updateProduct = updateProduct;
//Delete Product
function deleteProduct(req, res, next) {
    console.log("req.body", req.params.id);
    productService
        .deleteProduct(req.params.id)
        .then((data) => res.json(data))
        .catch((err) => next(err));
}
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=productController.js.map