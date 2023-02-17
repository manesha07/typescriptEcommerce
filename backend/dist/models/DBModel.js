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
Object.defineProperty(exports, "__esModule", { value: true });
const knexfile_1 = require("../knexfile");
/**
 * Base model for that can be used for all tables.
 *
 * @class DBModel
 */
class DBModel {
    constructor(table) {
        this.table = table;
        this.connection = knexfile_1.connection;
    }
    getAll1() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield (0, knexfile_1.connection)(this.table).select("*");
            return data;
        });
    }
    getAll(pageNumber, itemsPerPage) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield (0, knexfile_1.connection)(this.table)
                .select("*")
                .limit(itemsPerPage)
                .offset((pageNumber - 1) * itemsPerPage);
            return data;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [data] = yield (0, knexfile_1.connection)(this.table).select('*').where('id', id);
            return data ? data : null;
        });
    }
    findByParams(params) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("data find by param params", params);
            const data = yield (0, knexfile_1.connection)(this.table).select("*").where(params);
            console.log("data find by param", data);
            return data ? data : null;
        });
    }
    save(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield (0, knexfile_1.connection)(this.table).insert(data).returning("*");
            return result;
        });
    }
    updateById(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield (0, knexfile_1.connection)(this.table)
                .update(data)
                .where({ id })
                .returning("*");
            return result;
        });
    }
    removeById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield (0, knexfile_1.connection)(this.table).delete().where({ id });
            return result;
        });
    }
    removeByParams(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield (0, knexfile_1.connection)(this.table).delete().where(params);
            return result;
        });
    }
}
exports.default = DBModel;
//# sourceMappingURL=DBModel.js.map