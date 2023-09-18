import express from 'express'
import { getAllAnimals, addAnimal, deleteAnimal } from '../db/db'

const router = express.Router()

router.get('/', async (req, res) => {
  const animals = await getAllAnimals()
  res.json(animals)
})

router.post('/', async (req, res) => {
  const newAnimal = req.body
  const animal = await addAnimal(newAnimal)
  res.json(animal)
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  await deleteAnimal(Number(id))
  res.status(204).end()
})

export default router
