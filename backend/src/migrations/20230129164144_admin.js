/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('admin', (table) => {
      table.increments('id').primary().unsigned();
      table.string('name', 100).notNull();
      table.string('username', 100).notNull();
      table.string('email', 100).unique().notNull();
      table.string('password', 200).notNull();
      table.timestamps(true,true);
    });
  }

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable('admin');
  }

  