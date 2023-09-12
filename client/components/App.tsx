import { useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/index.css'

function App() {
  const [animals, setAnimals] = useState([])
  const [newAnimal, setNewAnimal] = useState({
    name: '',
    total_protein_content: '',
  })
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAnimals = async () => {
      setLoading(true)
      const response = await axios.get('/api/animals')
      setAnimals(response.data)
      setLoading(false)
    }
    fetchAnimals()
  }, [])

  const handleAddAnimal = async () => {
    const response = await axios.post('/api/animals', newAnimal)
    setAnimals([...animals, response.data])
    setNewAnimal({ name: '', total_protein_content: '' })
  }

  const handleDeleteAnimal = async (id: number) => {
    await axios.delete(`/api/animals/${id}`)
    setAnimals(animals.filter((animal: any) => animal.id !== id))
  }

  return (
    <>
      <header className="header">
        <h1>Bear Grill</h1>
        <h2>Awaken the animal within</h2>
        <h3>Discover which animals have the most protein</h3>
      </header>
      <section className="main">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <ul>
            {animals.map((animal: any) => (
              <li key={animal.id}>
                {animal.name} - {animal.total_protein_content}g
                <button
                  id="delete"
                  onClick={() => handleDeleteAnimal(animal.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
        <div>
          <h4>Or add your own:</h4>
          <label htmlFor="name">Animal:</label>
          <input
            type="text"
            id="name"
            value={newAnimal.name}
            onChange={(e) =>
              setNewAnimal({ ...newAnimal, name: e.target.value })
            }
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
          <button onClick={handleAddAnimal}>Add Animal</button>
        </div>
      </section>
    </>
  )
}

export default App
