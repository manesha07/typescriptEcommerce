"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = __importDefault(require("./routes"));
// import {connectDatabase} from "./database/connection.js"
const errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
const app = (0, express_1.default)();
dotenv_1.default.config({ path: ".env" });
console.log(process.env.PORT);
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use("/uploads", express_1.default.static("src/uploads"));
app.use(routes_1.default);
app.use(errorHandler_1.default);
// connectDatabase()
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});
// app.listen(8000, () => {
//     console.log(`Example app listening on port 8000`)
// })
//# sourceMappingURL=index.js.map