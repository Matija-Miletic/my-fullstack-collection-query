type Animal = {
  id: number
  name: string
  total_protein_content: number
}

type AnimalListProps = {
  animals: Animal[]
  handleDeleteAnimal: (id: number) => void
}

export default function AnimalList({
  animals,
  handleDeleteAnimal,
}: AnimalListProps) {
  return (
    <ul>
      {animals.map((animal) => (
        <li key={animal.id}>
          {animal.name} - {animal.total_protein_content}g
          <button id="delete" onClick={() => handleDeleteAnimal(animal.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}
