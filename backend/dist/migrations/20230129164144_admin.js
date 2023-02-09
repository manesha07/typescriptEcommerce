"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
function up(knex) {
    return knex.schema.createTable('admin', (table) => {
        table.increments('id').primary().unsigned();
        table.string('name', 100).notNull();
        table.string('username', 100).notNull();
        table.string('email', 100).unique().notNull();
        table.string('password', 200).notNull();
        table.timestamps(true, true);
    });
}
exports.up = up;
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
function down(knex) {
    return knex.schema.dropTable('admin');
}
exports.down = down;
//# sourceMappingURL=20230129164144_admin.js.map