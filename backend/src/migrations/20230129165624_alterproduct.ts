/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
import {Knex} from 'knex';
export function up(knex :Knex) :Promise<void> {
    return knex.schema.alterTable('product', (table:Knex.TableBuilder) => {
      table.integer('price').notNullable();
    });
  }

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex :Knex) :Promise<void>  {
    return knex.schema.dropTable('product');
  }
