import { useState, useEffect } from 'react'
import '../styles/index.css'
import Header from './Header'
import AnimalList from './AnimalList'
import AnimalForm from './AnimalForm'
import request from 'superagent'

const rootUrl = '/api/animals' // Setting the root URL

function App() {
  const initialAnimalFormState = {
    name: '',
    total_protein_content: '',
  }

  const [animals, setAnimals] = useState([])
  const [newAnimal, setNewAnimal] = useState(initialAnimalFormState)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAnimals = async () => {
      setLoading(true)
      const response = await request.get(`${rootUrl}`)
      setAnimals(response.body)
      setLoading(false)
    }
    fetchAnimals()
  }, [])

  const handleAddAnimal = async () => {
    const response = await request.post(`${rootUrl}`).send(newAnimal)
    setAnimals([...animals, response.body[0]])
    setNewAnimal(initialAnimalFormState)
  }

  const handleDeleteAnimal = async (id: number) => {
    await request.delete(`${rootUrl}/${id}`)
    setAnimals(animals.filter((animal: any) => animal.id !== id))
  }

  return (
    <>
      <Header />
      <section className="main">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <AnimalList
            animals={animals}
            handleDeleteAnimal={handleDeleteAnimal}
          />
        )}
        <AnimalForm
          newAnimal={newAnimal}
          setNewAnimal={setNewAnimal}
          handleAddAnimal={handleAddAnimal}
        />
      </section>
    </>
  )
}

export default App
