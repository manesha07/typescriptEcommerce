/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex:any) {
    return knex.schema.alterTable('product', (table:any) => {
      table.integer('price').notNull();
    });
  }

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex:any) {
    return knex.schema.dropTable('product');
  }
