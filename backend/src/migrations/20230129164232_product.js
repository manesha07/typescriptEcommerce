/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('product', (table) => {
      table.increments('id').primary().unsigned();
      table.string('name', 100).notNull();
      table.string('description', 100).notNull();
      table.string('category', 200).notNull();
      table.string('images', 200).notNull();
      table.integer('stock').notNull();
      table.timestamps(true,true);
    });
  }

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable('product');
  }
