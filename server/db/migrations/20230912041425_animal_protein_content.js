/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = (knex) => {
  return knex.schema.createTable('animal_protein_content', function (table) {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.float('total_protein_content').notNullable()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = (knex) => {
  return knex.schema.dropTable('animal_protein_content')
}
