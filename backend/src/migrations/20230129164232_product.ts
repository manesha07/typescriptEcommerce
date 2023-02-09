/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

import Knex from 'knex';

export function up(knex: any): Promise<void> {
  return knex.schema.createTable('product', (table:any) => {
    table.increments('id').primary().unsigned();
    table.string('name', 100).notNullable();
    table.string('description', 100).notNullable();
    table.string('category', 200).notNullable();
    table.string('images', 200).notNullable();
    table.integer('stock').notNullable();
    table.timestamps(true, true);
  });
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex:any) {
    return knex.schema.dropTable('product');
  }
