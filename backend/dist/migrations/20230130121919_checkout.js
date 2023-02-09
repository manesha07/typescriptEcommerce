"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
function up(knex) {
    return knex.schema.createTable("checkout", (table) => {
        table.increments("id").primary().unsigned();
        table.string("name", 100).notNull();
        table.string("email", 100).notNull();
        table.string("address", 200);
        table.string("phone", 10).notNull();
        ;
        table.timestamps(true, true);
    });
}
exports.up = up;
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
function down(knex) {
    return knex.schema.dropTable("checkout");
}
exports.down = down;
//# sourceMappingURL=20230130121919_checkout.js.map