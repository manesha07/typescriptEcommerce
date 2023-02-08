/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("checkout", (table) => {
    table.increments("id").primary().unsigned();
    table.string("name", 100).notNull();
    table.string("email", 100).notNull();
    table.string("address", 200);
    table.string("phone", 10).notNull();;
    table.timestamps(true, true);
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("checkout");
}
