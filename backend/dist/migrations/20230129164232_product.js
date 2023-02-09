"use strict";
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
function up(knex) {
    return knex.schema.createTable('product', (table) => {
        table.increments('id').primary().unsigned();
        table.string('name', 100).notNullable();
        table.string('description', 100).notNullable();
        table.string('category', 200).notNullable();
        table.string('images', 200).notNullable();
        table.integer('stock').notNullable();
        table.timestamps(true, true);
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
//# sourceMappingURL=20230129164232_product.js.map