"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const knex_1 = __importDefault(require("knex"));
// const configuration = {
//     client: "pg",
//     connection: {
//         host: "localhost",
//         port: 5432,
//         user: "postgres",
//         password: "postgres",
//         database: "typescriptecdb",
//     },
//     migrations: {
//         tableName: "migrations",
//     },
//     seeds: {
//         directory: "./seeds",
//         stub: "./stub/seed.stub",
//     },
// };
// ELEPHANT SUJATA
// ELEPHANT
// import Knex from 'knex';
const configuration = {
  client: "pg",
  connection: {
    host: "satao.db.elephantsql.com",
    port: 5432,
    user: "ixfkndjf",
    password: "pai8KiXmaa-ObCf32QNLfPddm1MpoOJ0",
    database: "ixfkndjf",
  },
  migrations: {
    tableName: "migrations",
  },
  seeds: {
    directory: "./seeds",
    stub: "./stub/seed.stub",
  },
};
exports.connection = (0, knex_1.default)(configuration);
exports.default = configuration;
// //ELEPHANT
// const configuration = {
//   client: "pg",
//   connection: {
//     host: "satao.db.elephantsql.com",
//     port: 5432,
//     user: "ixfkndjf",
//     password: "pai8KiXmaa-ObCf32QNLfPddm1MpoOJ0",
//     database: "ixfkndjf",
//   },
//   migrations: {
//     tableName: "migrations",
//   },
//   seeds: {
//     directory: "./seeds",
//     stub: "./stub/seed.stub",
//   },
// };
// export const connection = Knex(configuration);
// export default configuration;
//# sourceMappingURL=knexfile.js.map
