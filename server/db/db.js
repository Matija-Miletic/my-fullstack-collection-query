import connection from './connection.ts'

export function getAllAnimals() {
  return connection('animal_protein_content').select()
}

export function getAnimalById(animalId) {
  return connection('animal_protein_content')
    .select()
    .where({ id: animalId })
    .first()
}

export function addAnimal(animal) {
  return connection('animal_protein_content').insert(animal)
}

export function updateAnimal(animalWithId) {
  return connection('animal_protein_content')
    .update({
      name: animalWithId.name,
      total_protein_content: animalWithId.total_protein_content,
    })
    .where('id', animalWithId.id)
}

export function deleteAnimal(id) {
  return connection('animal_protein_content').delete().where({ id })
}
