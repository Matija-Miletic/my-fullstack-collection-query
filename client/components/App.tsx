import { useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/index.css'
import Header from './Header'
import AnimalList from './AnimalList'
import AnimalForm from './AnimalForm'

function App() {
  // const initialAnimalFormState = {
  //   name: '',
  //   total_protein_content: '',
  // }

  const [animals, setAnimals] = useState([])
  const [newAnimal, setNewAnimal] = useState({
    //replace with variable initialAnimalFormState
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
    setAnimals([...animals, response.data]) //add the index number for the item to response.data
    setNewAnimal({ name: '', total_protein_content: '' }) //replace with variable initialAnimalFormState
  }

  const handleDeleteAnimal = async (id: number) => {
    await axios.delete(`/api/animals/${id}`)
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
