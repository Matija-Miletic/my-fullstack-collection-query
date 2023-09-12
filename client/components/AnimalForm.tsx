type AnimalFormProps = {
  newAnimal: { name: string; total_protein_content: string }
  setNewAnimal: (animal: {
    name: string
    total_protein_content: string
  }) => void
  handleAddAnimal: () => void
}

export default function AnimalForm({
  newAnimal,
  setNewAnimal,
  handleAddAnimal,
}: AnimalFormProps) {
  return (
    <div>
      <h4>Or add your own:</h4>
      <label htmlFor="name">Animal:</label>
      <input
        type="text"
        id="name"
        value={newAnimal.name}
        onChange={(e) => setNewAnimal({ ...newAnimal, name: e.target.value })}
      />
      <label htmlFor="protein">Protein Content:</label>
      <input
        type="text"
        id="protein"
        value={newAnimal.total_protein_content}
        onChange={(e) =>
          setNewAnimal({
            ...newAnimal,
            total_protein_content: e.target.value,
          })
        }
      />
      <button id="addAnimal" onClick={handleAddAnimal}>
        Add Animal
      </button>
    </div>
  )
}
