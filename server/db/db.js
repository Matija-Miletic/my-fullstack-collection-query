import connection from './connection.ts'

// Get all animals
export function getAllAnimals() {
  return connection('animals').select()
}

// Get animal by ID
export function getAnimalById(animalId) {
  return connection('animals').select().where({ id: animalId }).first()
}

// Add new animal
export function addAnimal(animal) {
  return connection('animals').insert(animal)
}

// Update existing animal by ID
export function updateAnimal(animalWithId) {
  return connection('animals')
    .update({
      name: animalWithId.name,
      total_protein_content: animalWithId.total_protein_content,
    })
    .where('id', animalWithId.id)
}

// Delete animal by ID
export function deleteAnimal(id) {
  return connection('animals').delete().where({ id })
}
