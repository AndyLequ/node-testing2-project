// 31010123456_create_users_table.js

export function up(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable().unique();
    table.timestamps(true, true);
  });
}

export function down(knex) {
  return knex.schema.dropTable('users');
}