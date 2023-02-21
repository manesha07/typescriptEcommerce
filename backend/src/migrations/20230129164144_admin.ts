/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
import {Knex} from 'knex';

export function up(knex :Knex) :Promise<void> {
    return knex.schema.createTable('admin', (table:Knex.TableBuilder) => {
      table.increments('id').primary().unsigned();
      table.string('name', 100).notNullable();
      table.string('username', 100).notNullable();
      table.string('email', 100).unique().notNullable();
      table.string('password', 200).notNullable();
      table.timestamps(true,true);
    });
  }

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex :Knex) :Promise<void> {
    return knex.schema.dropTable('admin');
  }

  