/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("auditions", (table) => {
    table.uuid("id").primary();
    table.string("project").notNullable();
    table.string("role").notNullable();
    table.string("deadline").notNullable();
    table.string("status").notNullable();
    table.string("casting").notNullable();
    table.string("network").notNullable();

    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable("auditions");
};
