/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('animal_protein_content').del()

  // Seeds boilerplate table data
  return knex('animal_protein_content').insert([
    { id: 1, name: 'Aye-Aye', total_protein_content: 400 },
    { id: 2, name: 'Naked Mole Rat', total_protein_content: 12 },
    { id: 3, name: 'Sunfish', total_protein_content: 400000 },
    { id: 4, name: 'Axolotl', total_protein_content: 60 },
    { id: 5, name: 'Kakapo', total_protein_content: 1200 },
    { id: 6, name: 'Tarsier', total_protein_content: 240 },
    { id: 7, name: 'Solifugae', total_protein_content: 1 },
    { id: 8, name: 'Jerboa', total_protein_content: 40 },
    { id: 9, name: 'Fossa', total_protein_content: 1200 },
    { id: 10, name: 'Hagfish', total_protein_content: 800 },
  ])
}
