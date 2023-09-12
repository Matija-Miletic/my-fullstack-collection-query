import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [animals, setAnimals] = useState([])
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

  return (
    <>
      <header className="header">
        <h1>Total Protein Content of Various Critters</h1>
      </header>
      <section className="main">
        {isLoading ? (
          <div id="loading">Loading...</div>
        ) : (
          <ul id="animalList">
            {animals.map((animal) => (
              <li key={animal.id}>
                {animal.name} - {animal.total_protein_content}g
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  )
}

export default App
