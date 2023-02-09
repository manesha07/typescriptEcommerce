"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
function up(knex) {
    return knex.schema.alterTable('product', (table) => {
        table.integer('price').notNull();
    });
}
exports.up = up;
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
function down(knex) {
    return knex.schema.dropTable('product');
}
exports.down = down;
//# sourceMappingURL=20230129165624_alterproduct.js.map